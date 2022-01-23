import { action, makeObservable, observable } from "mobx";

export abstract class EmmisionStore {
  public emission: number | undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public calculate(_props: Record<string, unknown>): unknown {
    throw new Error("not implemented!");
  }

  constructor() {
    makeObservable(this, {
      emission: observable,
      calculate: action,
    });
  }
}
