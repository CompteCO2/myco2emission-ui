import { makeAutoObservable } from "mobx";
import { RootStore } from "stores";
import { FoodEmmision } from "./emmisions/food";

export const enum CARBON_FOOTPRINT_MODULES {
  FOOD,
}

export class CarbonFootprint {
  // root store.
  private root: RootStore;

  // a dict with modules for calculator
  public modules = {
    [CARBON_FOOTPRINT_MODULES.FOOD]: new FoodEmmision(),
  };

  constructor(root: RootStore) {
    makeAutoObservable(this);

    this.root = root;
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
}
