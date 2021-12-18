import { AirportStore } from "./airport";
import { FlyStore } from "./fly";

export class RootStore {
  public flyStore: FlyStore;
  public airportStore: AirportStore;

  constructor() {
    this.flyStore = new FlyStore();
    this.airportStore = new AirportStore();
  }
}
