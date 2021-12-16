import { AirportStore } from "./airport";
import { FlyStore } from "./fly";

export class RootStore {
  public flyStore: FlyStore = new FlyStore();
  public airportStore: AirportStore = new AirportStore();
}
