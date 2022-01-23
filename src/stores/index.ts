import { AirportStore } from "./airport";
import { CarbonFootprintStore } from "./carbonFootprint";
import { FoodConsumption } from "./consumptions/food";
import { FlyStore } from "./fly";

export class RootStore {
  public flyStore: FlyStore;
  public airportStore: AirportStore;
  public carbonFootprintStore: CarbonFootprintStore;

  // consumptions
  public foodConsumption: FoodConsumption;

  constructor() {
    this.flyStore = new FlyStore();
    this.airportStore = new AirportStore();
    this.carbonFootprintStore = new CarbonFootprintStore();

    // consumptions
    this.foodConsumption = new FoodConsumption();
  }
}
