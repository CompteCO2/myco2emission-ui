import { action, makeObservable, observable } from "mobx";
import { RootStore } from "stores";

export abstract class EmmisionStore {
  // emmission.
  public emission: number | undefined;

  // average emission.
  public average: number | undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate(_props: Record<string, unknown>): unknown {
    throw new Error("not implemented!");
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    throw new Error("not implemented!");
  }

  constructor(private rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      emission: observable,
      calculate: action,
    });

    this.calculateAverage();
  }
}
