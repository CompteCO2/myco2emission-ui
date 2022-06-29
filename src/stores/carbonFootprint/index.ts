import { makeAutoObservable, reaction } from "mobx";
import { RootStore } from "stores";
import { EmmisionStore } from "stores/emmisions";
import {
  FlightDataE,
  FoodDataE,
  HouseDataE,
  VehicleDataE,
} from "@cco2/carbon-weight/dist";
import { FlyEmmision } from "stores/emmisions/fly";
import { HouseEmmision } from "stores/emmisions/house";
import { TransportEmmision } from "stores/emmisions/transport";
import { FoodEmmision } from "../emmisions/food";

export const enum CARBON_FOOTPRINT_MODULES {
  FOOD = "food",
  TRANSPORT = "transport",
  FLY = "fly",
  HOUSE = "house",
}

export class CarbonFootprintStore {
  public modules: Record<string, EmmisionStore>;

  // a footprint sum.
  public sum = 0;

  // a footprint proportion
  public proportion: Record<string, number> = {};

  // a flag indicating if a value has been computed
  public isComputed = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    // a dict with modules for calculator
    this.modules = {
      [CARBON_FOOTPRINT_MODULES.FOOD]: new FoodEmmision(
        rootStore,
        FoodDataE.ADEME_2022
      ),
      [CARBON_FOOTPRINT_MODULES.TRANSPORT]: new TransportEmmision(
        rootStore,
        VehicleDataE.CCO2_2022
      ),
      [CARBON_FOOTPRINT_MODULES.FLY]: new FlyEmmision(
        rootStore,
        FlightDataE.ADEME_2022
      ),
      [CARBON_FOOTPRINT_MODULES.HOUSE]: new HouseEmmision(
        rootStore,
        HouseDataE.CCO2_2022
      ),
    };

    // react to change emissions.
    Object.values(this.modules).forEach(module => {
      reaction(
        () => module.emission,
        () => {
          this.calculateFootprint();
        }
      );
    });

    // react to change sum.
    reaction(
      () => this.sum,
      () => {
        this.calculateProportion();
      }
    );
  }

  /**
   * Calculates emmision by a module.
   * @param moduleName - a string of a module name.
   * @param params - a dict with prams for emmision calculation.
   */
  public calculate(
    moduleName: CARBON_FOOTPRINT_MODULES,
    params: Record<string, unknown>
  ): void {
    if (!this.modules[moduleName]) {
      throw new Error(`Module ${moduleName} is not exist.`);
    }

    this.modules[moduleName].calculate(params);
  }

  /**
   * calculate sum
   */
  private calculateFootprint() {
    this.isComputed = true;
    this.sum = Object.keys(this.modules).reduce((acc, key) => {
      const item = this.modules[key];

      if (item) {
        acc = acc + (item.emission ?? 0);
      }

      return acc;
    }, 0);
  }

  /**
   * calculate proportion.
   */
  private calculateProportion() {
    this.proportion = Object.keys(this.modules).reduce((acc, key) => {
      const item = this.modules[key];

      acc[key] = item.emission ? (item.emission / this.sum) * 100 : 0;

      return acc;
    }, {} as Record<string, number>);
  }
}
