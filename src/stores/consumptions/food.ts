import { FoodConsumptionT } from "@cco2/carbon-weight/dist";
import { makeAutoObservable } from "mobx";

type ConsumptionTemplate<T> = { -readonly [P in keyof T]: T[P] };
type ConsumptionT = ConsumptionTemplate<FoodConsumptionT>;

/**
 * A controller for comsumption by food.
 */
export class FoodConsumption {
  // max food consumption value.
  public maxValue = 14;
  private midValue = 7;

  /**
   * A dict with consumptions by food.
   */
  public consumptionByFood: ConsumptionT = {
    alcohol: this.midValue,
    bread: this.midValue,
    cheese: this.midValue,
    fish: this.midValue,
    harvestExotic: this.midValue,
    harvestLocal: this.midValue,
    meatRed: this.midValue,
    meatWhite: this.midValue,
    rice: this.midValue,
    soft: this.midValue,
  };

  /**
   * constructor
   */
  constructor() {
    makeAutoObservable(this);
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
