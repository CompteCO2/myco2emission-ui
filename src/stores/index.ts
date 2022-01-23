import { AirportStore } from "./airport";
import { CarbonFootprint } from "./carbonFootprint";
import { FoodConsumption } from "./consumptions/food";
import { FlyStore } from "./fly";

export class RootStore {
  public flyStore: FlyStore;
  public airportStore: AirportStore;
  public carbonFootprint: CarbonFootprint;

  // consumptions
  public foodConsumption: FoodConsumption;

  constructor() {
    this.flyStore = new FlyStore();
    this.airportStore = new AirportStore();
    this.carbonFootprint = new CarbonFootprint(this);

    // consumptions
    this.foodConsumption = new FoodConsumption();
  }
}
