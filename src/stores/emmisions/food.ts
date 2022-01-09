import { makeAutoObservable } from "mobx";
import { EmmisionStore } from ".";

export class FoodEmmision implements EmmisionStore {
  public emission = 0;

  /**
   * 
   * @param props - a dic with props.
   */
  calculate(props: Record<string, unknown>): void {
    console.log(props);
  }

  constructor() {
    makeAutoObservable(this);
  }
}
