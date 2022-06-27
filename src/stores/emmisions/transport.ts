import { EmmisionStore } from ".";
import {
  Vehicle,
  VehicleConsumptionT as ConsumptionT,
  VehicleDataE as DataE,
  VehicleFuelE as FuelE,
} from "@cco2/carbon-weight/dist";
import { RootStore } from "stores";
import { reaction } from "mobx";

export class TransportEmmision extends EmmisionStore {
  // Calculator with specified dataset
  private calculator;

  constructor(rootStore: RootStore, dataset: DataE) {
    super(rootStore);
    this.calculator = Vehicle.build(dataset);
    this.calculateAverage();

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
    this.emission =
      props.fuel in FuelE
        ? this.calculator!.getEmissionConsumed({ ...props })
        : 0;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = this.calculator!.getEmissionAvg();
  }
}
