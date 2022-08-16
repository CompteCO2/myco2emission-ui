import { makeAutoObservable } from "mobx";

export interface Fly {
  destination: string;
  arrival: string;
  class: FLY_CLASS;
  travelNumber: number;
  type: FLY_TYPE;
}

export enum FLY_CLASS {
  ECONOM = "1",
  BUSINESS = "2",
}

export enum FLY_TYPE {
  SIMPLE = 1,
  ROUND = 2,
}

/**
 * A controller for comsumption by fly.
 */
export class FlyConsumption {
  // a list of flies.
  public flies: Fly[] = [];

  /**
   * constructor
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Set consumption.
   * @param flies new flies.
   */
  public setFlies(flies: Fly[]): void {
    this.flies = flies;
  }

  /**
   * Add a new fly to the list.
   * @param fly a fly.
   */
  public addFly(fly: Fly): void {
    this.flies = [...this.flies, fly];
  }

  /**
   * Delete a fly.
   * @param index - index of a fly which should be delete.d
   */
  public deleteByIndex(index: number): void {
    this.flies.splice(index, 1);

    this.flies = [...this.flies];
  }
}
