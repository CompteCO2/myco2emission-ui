import { VehicleConsumptionT as ConsumptionT } from "@cco2/carbon-weight/dist";
import { makeAutoObservable } from "mobx";

export type TConsumption = Omit<ConsumptionT, "fuel"> & {
  fuel: string;
};

/**
 * A controller for comsumption by transport.
 */
export class TransportConsumption {
  // current ConsumptionT.
  public currentConsumption: TConsumption = {
    fuel: "",
    distanceByYear: 20000,
    mpg: 8,
  };

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
  public setTConsumption(consumption: TConsumption): void {
    this.currentConsumption = consumption;
  }
}
