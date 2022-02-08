import { EmmisionStore } from ".";
import { getEmission } from "@cco2/carbon-weight/dist/food/index";
import { FoodE } from "@cco2/carbon-weight/dist/food/types";
import { RootStore } from "stores";
import { reaction } from "mobx";

export class FoodEmmision extends EmmisionStore {
  public emission = 0;

  constructor(rootStore: RootStore) {
    super(rootStore);

    // react to change consumption.
    reaction(
      () => rootStore.foodConsumption.consumptionByFood,
      value => {
        this.calculate(value);
      }
    );
  }

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: Record<FoodE, unknown>): void {
    const emission = getEmission({ ...props } as Record<FoodE, number>);

    this.emission = emission.emission;
  }
}
