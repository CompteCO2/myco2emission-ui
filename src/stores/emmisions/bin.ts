import { EmmisionStore } from ".";
import { Food, FoodDataE as DataE, FoodE } from "@cco2/carbon-weight/dist";
import { RootStore } from "stores";
import { reaction } from "mobx";

export class BinEmmision extends EmmisionStore {
  // Calculator with specified dataset
  private calculator: Food;

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
   * Calculate estimated emissions.
   */
  calculate(props: Record<FoodE, unknown>): void {
    const emission = this.calculator!.getEmissionEstimated({
      ...props,
    } as Record<FoodE, number>);

    this.emission = emission.waste;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = this.calculator!.getEmissionAvg().waste;
  }
}
