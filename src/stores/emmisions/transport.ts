import { EmmisionStore } from ".";
import {
  getEmissionConsumed,
  getEmissionAvg,
} from "@cco2/carbon-weight/dist/vehicle/index";
import { ConsumptionT, FuelE } from "@cco2/carbon-weight/dist/vehicle/types";
import { RootStore } from "stores";
import { reaction } from "mobx";

export class TransportEmmision extends EmmisionStore {
  public emission = 0;

  constructor(rootStore: RootStore) {
    super(rootStore);

    // react to change consumption.
    reaction(
      () => rootStore.transportConsumption.currentConsumption,
      value => {
        this.calculate(value as ConsumptionT);
      }
    );
  }

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: ConsumptionT): void {
    this.emission = props.fuel in FuelE ? getEmissionConsumed({ ...props }) : 0;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = getEmissionAvg();
  }
}
