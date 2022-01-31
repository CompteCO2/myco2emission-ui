import { ConsumptionT } from "@cco2/carbon-weight/dist/vehicle/types";
import { makeAutoObservable } from "mobx";

/**
 * A controller for comsumption by transport.
 */
export class TransportConsumption {
  // current ConsumptionT.
  public currentConsumption: ConsumptionT | null | undefined = null;

  /**
   * constructor
   */
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Set consumption.
   * @param consumption new consumption.
   */
  public setConsumption(consumption: ConsumptionT | null | undefined): void {
    this.currentConsumption = consumption;
  }
}
