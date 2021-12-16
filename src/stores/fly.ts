import { makeAutoObservable } from "mobx";

export interface Fly {
  destination: string;
  arrival: string;
  class: string;
  passagersNumber: number;
  type: number;
}

export class FlyStore {
  public flies: Fly[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public addFly(fly: Fly): void {
    this.flies.push(fly);
  }
}
