import { RootStore } from "stores";
import { autorun } from "mobx";

import { EmmisionStore } from ".";
import {
  getEmission,
  getEmissionAvg,
} from "@cco2/carbon-weight/dist/house/index";
import {
  HeaterE,
  HouseE,
  HouseT,
  YearE,
} from "@cco2/carbon-weight/dist/house/types";
import { HouseConsumption } from "stores/consumptions/house";

export class HouseEmmision extends EmmisionStore {
  // emission result.
  public emission = 0;

  // when the building was built.
  public OLD_BUILDING_YEAR = 1970;

  constructor(rootStore: RootStore) {
    super(rootStore);

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
      this.calculate({
        built: this.mutateBuild(houseConsumption.buildingYear),
        surface: houseConsumption.surface,
        emission: houseConsumption.consumption,
        type: HouseE.apartment,
        region: houseConsumption.department,
        heater: this.mutateHeater(houseConsumption.type) as HeaterE,
      });
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
   * @param buildingYear a building year.
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
   * @param props - a dic with props.
   */
  calculate(props: HouseT): void {
    this.emission = props.heater ? getEmission(props) : 0;
  }

  /**
   * Calculate average.
   */
  public calculateAverage(): void {
    this.average = getEmissionAvg();
  }
}
