import { makeAutoObservable } from "mobx";
import { EmmisionStore } from "stores/emmisions";
import { FoodEmmision } from "../emmisions/food";

export const enum CARBON_FOOTPRINT_MODULES {
  FOOD,
}

export class CarbonFootprintStore {
  // a dict with modules for calculator
  public modules: Record<string, EmmisionStore> = {
    [CARBON_FOOTPRINT_MODULES.FOOD]: new FoodEmmision(),
  };

  // a footprint sum.
  public sum = 0;

  // a footprint proportion
  public proportion: Record<string, number> = {};

  constructor() {
    makeAutoObservable(this);
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

    this.calculateFootprint();
    this.calculateProportion();
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
