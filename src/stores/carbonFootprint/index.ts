import { makeAutoObservable, reaction } from "mobx";
import { RootStore } from "stores";
import { EmmisionStore } from "stores/emmisions";
import { BinEmmision } from "stores/emmisions/bin";
import { DataE as DataFood } from "@cco2/carbon-weight/dist/food/types";
import { FlyEmmision } from "stores/emmisions/fly";
import { DataE as DataFly } from "@cco2/carbon-weight/dist/flight/types";
import { HouseEmmision } from "stores/emmisions/house";
import { DataE as DataHouse } from "@cco2/carbon-weight/dist/house/types";
import { TransportEmmision } from "stores/emmisions/transport";
import { DataE as DataTransport } from "@cco2/carbon-weight/dist/vehicle/types";
import { FoodEmmision } from "../emmisions/food";

export const enum CARBON_FOOTPRINT_MODULES {
  FOOD = "food",
  TRANSPORT = "transport",
  FLY = "fly",
  HOUSE = "house",
  BIN = "bin",
}

export class CarbonFootprintStore {
  public modules: Record<string, EmmisionStore>;

  // a footprint sum.
  public sum = 0;

  // a footprint proportion
  public proportion: Record<string, number> = {};

  // a flag indicating if the value has been computed
  public computed: Record<string, boolean> = {};

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    // a dict with modules for calculator
    this.modules = {
      [CARBON_FOOTPRINT_MODULES.FOOD]: new FoodEmmision(
        rootStore,
        DataFood.ADEME_2022
      ),
      [CARBON_FOOTPRINT_MODULES.TRANSPORT]: new TransportEmmision(
        rootStore,
        DataTransport.CCO2_2022
      ),
      [CARBON_FOOTPRINT_MODULES.FLY]: new FlyEmmision(
        rootStore,
        DataFly.ADEME_2022
      ),
      [CARBON_FOOTPRINT_MODULES.HOUSE]: new HouseEmmision(
        rootStore,
        DataHouse.CCO2_2022
      ),
      [CARBON_FOOTPRINT_MODULES.BIN]: new BinEmmision(
        rootStore,
        DataFood.ADEME_2022
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
