import { makeAutoObservable } from "mobx";

export interface Fly {
  destination: string;
  arrival: string;
  class: string;
  travelNumber: number;
  type: number;
}

export class FlyStore {
  public flies: Fly[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public addFly(fly: Fly): void {
    this.flies = [...this.flies, fly];
  }

  public deleteByIndex(index: number): void {
    this.flies.splice(index, 1);

    this.flies = [...this.flies];
  }
}
