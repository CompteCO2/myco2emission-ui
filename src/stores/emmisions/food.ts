import { EmmisionStore } from ".";
import { Food, FoodDataE as DataE, FoodE } from "@cco2/carbon-weight/dist";
import { RootStore } from "stores";
import { reaction } from "mobx";

export class FoodEmmision extends EmmisionStore {
  // Calculator with specified dataset
  private calculator;

  constructor(rootStore: RootStore, dataset: DataE) {
    super(rootStore);
    this.calculator = Food.build(dataset);
    this.calculateAverage();

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
    const emission = this.calculator!.getEmissionEstimated({
      ...props,
    } as Record<FoodE, number>);

    this.emission = emission.emission;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = this.calculator!.getEmissionAvg().emission;
  }
}
