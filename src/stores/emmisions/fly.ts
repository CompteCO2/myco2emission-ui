import { EmmisionStore } from ".";
import {
  Flight,
  FlightDataE as DataE,
  FlightSeatE as SeatE,
} from "@cco2/carbon-weight/dist";
import { Fly, FLY_CLASS, FLY_TYPE } from "stores/consumptions/fly";
import { RootStore } from "stores";
import { reaction } from "mobx";

const FlyClassComparator = {
  [FLY_CLASS.BUSINESS]: SeatE.business,
  [FLY_CLASS.ECONOM]: SeatE.economy,
};

const FlyTypeComparator = {
  [FLY_TYPE.SIMPLE]: false,
  [FLY_TYPE.ROUND]: true,
};

export class FlyEmmision extends EmmisionStore {
  // Calculator with specified dataset
  private calculator;

  constructor(rootStore: RootStore, dataset: DataE) {
    super(rootStore);
    this.calculator = Flight.build(dataset);
    this.calculateAverage();

    // react to change consumption.
    reaction(
      () => rootStore.flyConsumption.flies,
      flies => {
        this.calculate({ flies });
      }
    );
  }

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: { flies: Fly[] }): void {
    const emissions = props.flies.reduce((acc, value) => {
      const emmision = this.calculator!.getEmissionEstimated(
        {
          fromIATA: value.arrival,
          nbPassengers: value.travelNumber,
          roundTrip: FlyTypeComparator[value.type],
          seatType: FlyClassComparator[value.class],
          toIATA: value.destination,
        },
        1
      );

      acc = acc + emmision;

      return acc;
    }, 0);

    this.emission = emissions;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = this.calculator!.getEmissionAvg();
  }
}
