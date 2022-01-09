import { AirportStore } from "./airport";
import { CarbonFootprint } from "./carbonFootprint";
import { FlyStore } from "./fly";

export class RootStore {
  public flyStore: FlyStore;
  public airportStore: AirportStore;
  public carbonFootprint: CarbonFootprint;

  constructor() {
    this.flyStore = new FlyStore();
    this.airportStore = new AirportStore();
    this.carbonFootprint = new CarbonFootprint();
  }
}
