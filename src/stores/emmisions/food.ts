import { EmmisionStore } from ".";
import {
  FoodConsumptionT as ConsumptionT,
  Food,
  FoodDataE as DataE,
} from "@cco2/carbon-weight/dist";
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
        this.calculate(value as ConsumptionT);
      }
    );
  }

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: ConsumptionT): void {
    const emission = this.calculator!.getEmissionEstimated({ ...props });
    this.emission = emission.emission + emission.waste;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    const average = this.calculator!.getEmissionAvg();
    this.average = average.emission + average.waste;
  }
}
