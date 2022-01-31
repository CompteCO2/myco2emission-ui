import { EmmisionStore } from ".";
import { getEmission } from "@cco2/carbon-weight/dist/flight/index";
import { Fly, FLY_CLASS, FLY_TYPE } from "stores/consumptions/fly";
import { SeatE } from "@cco2/carbon-weight/dist/flight/types";

const FlyClassComparator = {
  [FLY_CLASS.BUSINESS]: SeatE.business,
  [FLY_CLASS.ECONOM]: SeatE.economy,
};

const FlyTypeComparator = {
  [FLY_TYPE.SIMPLE]: false,
  [FLY_TYPE.ROUND]: true,
};

export class FlyEmmision extends EmmisionStore {
  public emission = 0;

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: { flies: Fly[] }): void {
    const emissions = props.flies.reduce((acc, value) => {
      const emmision = getEmission(
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
}
