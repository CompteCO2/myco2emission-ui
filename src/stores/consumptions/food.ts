import { FoodE } from "@cco2/carbon-weight/dist/food/types";
import { makeAutoObservable } from "mobx";

/**
 * A controller for comsumption by food.
 */
export class FoodConsumption {
  // max food consumption value.
  public maxValue = 14;

  /**
   * A dict with consumptions by food.
   */
  public consumptionByFood: Record<string, number> = {};

  /**
   * constructor
   */
  constructor() {
    makeAutoObservable(this);

    this.initConsumptions();
  }

  /**
   * Init default consumptions.
   */
  private initConsumptions() {
    this.consumptionByFood = Object.keys(FoodE).reduce((acc, type) => {
      acc[type] = Math.ceil(this.maxValue / 2);
      return acc;
    }, {} as Record<string, number>);
  }

  /**
   * Sets consumption by a food type.
   * @param type - a food type string.
   * @param value - a number of a new value.
   */
  public setConsumptionByFoodType(type: string, value: number): void {
    this.consumptionByFood = {
      ...this.consumptionByFood,
      [type]: value,
    };
  }
}
