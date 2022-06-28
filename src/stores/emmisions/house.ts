import { RootStore } from "stores";
import { autorun } from "mobx";
import {
  House,
  HouseDataE as DataE,
  HouseE,
  HouseHeaterE as HeaterE,
  HouseT,
  HouseYearE as YearE,
} from "@cco2/carbon-weight/dist";
//
import { EmmisionStore } from ".";
import { HouseConsumption } from "stores/consumptions/house";

export class HouseEmmision extends EmmisionStore {
  // Calculator with specified dataset
  private calculator;

  // when the building was built.
  public OLD_BUILDING_YEAR = 1970;

  constructor(rootStore: RootStore, dataset: DataE) {
    super(rootStore);
    this.calculator = House.build(dataset);
    this.calculateAverage();

    // react to change consumption.
    this.onCalculate(rootStore.houseConsumption);
  }

  /**
   * Calclate consumption
   * @param houseConsumption - house consumption
   */
  private onCalculate(houseConsumption: HouseConsumption) {
    // react to change consumption.
    autorun(() => {
      // Workaround calculations for specific CCO2 computation
      const heater = this.mutateHeater(houseConsumption.type) as HeaterE;

      console.log("HouseConsumption", heater);
      switch (heater) {
        // Surface to 0 for emission not computed
        case HeaterE.electric:
        case HeaterE.heatPump:
        case HeaterE.thermalSolar:
        case HeaterE.wood:
        case HeaterE.urban:
          this.calculateConsumed(0, heater);
          break;
        // Not based on real consumption
        case HeaterE.gas: {
          const props: HouseT = {
            built: this.mutateBuild(houseConsumption.buildingYear),
            surface: houseConsumption.surface,
            type: HouseE.house,
            heater: this.mutateHeater(houseConsumption.type) as HeaterE,
          };

          if (houseConsumption.department) {
            props.region = parseInt(houseConsumption.department, 10) || 0;
          }

          this.calculate(props);
          break;
        }
        // Restore default consumption if unset
        default:
          this.calculateConsumed(houseConsumption.consumption, heater);
      }
    });
  }

  /**
   * Mutate building year to type.
   * @param buildingYear a building year.
   */
  public mutateBuild(buildingYear: number): YearE {
    return buildingYear <= this.OLD_BUILDING_YEAR ? YearE.old : YearE.recent;
  }

  /**
   * Mutate building heater.
   * @param heater the heater type.
   */
  public mutateHeater(heater: string): string {
    const mappings: Record<string, string[]> = {
      electric: ["thermal_solar", "heat_pump"],
    };
    const keys = Object.keys(mappings);

    for (let i = 0; i < keys.length; i++) {
      const mapKey = keys[i];
      const items = mappings[mapKey];

      if (items.includes(heater)) {
        return mapKey;
      }
    }

    return heater;
  }

  /**
   *
   */
  calculate(props: HouseT): void {
    this.emission = props.heater
      ? this.calculator!.getEmissionEstimated(props)
      : 0;
  }

  /**
   *
   */
  calculateConsumed(consumption: number, heater: HeaterE): void {
    this.emission = heater
      ? this.calculator!.getEmissionConsumed([consumption], heater)
      : 0;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = this.calculator!.getEmissionAvg();
  }
}
