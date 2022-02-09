import { AirportStore } from "./airport";
import { CarbonFootprintStore } from "./carbonFootprint";
import { FlyConsumption } from "./consumptions/fly";
import { FoodConsumption } from "./consumptions/food";
import { HouseConsumption } from "./consumptions/house";
import { TransportConsumption } from "./consumptions/transport";

export class RootStore {
  public airportStore: AirportStore;
  public carbonFootprintStore: CarbonFootprintStore;

  // consumptions
  public foodConsumption: FoodConsumption;
  public transportConsumption: TransportConsumption;
  public flyConsumption: FlyConsumption;
  public houseConsumption: HouseConsumption;

  constructor() {
    this.airportStore = new AirportStore();

    // consumptions
    this.foodConsumption = new FoodConsumption();
    this.transportConsumption = new TransportConsumption();
    this.flyConsumption = new FlyConsumption();
    this.houseConsumption = new HouseConsumption();

    // calculation
    this.carbonFootprintStore = new CarbonFootprintStore(this);
  }
}
