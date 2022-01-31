import { EmmisionStore } from ".";
import { getEmissionConsumed } from "@cco2/carbon-weight/dist/vehicle/index";
import { ConsumptionT } from "@cco2/carbon-weight/dist/vehicle/types";

export class FlyEmmision extends EmmisionStore {
  public emission = 0;

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: ConsumptionT): void {
    const emission = getEmissionConsumed({ ...props });

    this.emission = emission;
  }
}
