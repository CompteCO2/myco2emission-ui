import { makeAutoObservable, reaction } from "mobx";
import { RootStore } from "stores";
import { EmmisionStore } from "stores/emmisions";
import { FlyEmmision } from "stores/emmisions/fly";
import { TransportEmmision } from "stores/emmisions/transport";
import { FoodEmmision } from "../emmisions/food";

export const enum CARBON_FOOTPRINT_MODULES {
  FOOD = "food",
  TRANSPORT = "transport",
  FLY = "fly",
}

export class CarbonFootprintStore {
  public modules: Record<string, EmmisionStore>;

  // a footprint sum.
  public sum = 0;

  // a footprint proportion
  public proportion: Record<string, number> = {};

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);

    // a dict with modules for calculator
    this.modules = {
      [CARBON_FOOTPRINT_MODULES.FOOD]: new FoodEmmision(rootStore),
      [CARBON_FOOTPRINT_MODULES.TRANSPORT]: new TransportEmmision(rootStore),
      [CARBON_FOOTPRINT_MODULES.FLY]: new FlyEmmision(rootStore),
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
