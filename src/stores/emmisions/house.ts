import { RootStore } from "stores";
import { autorun } from "mobx";

import { EmmisionStore } from ".";
import { getEmission } from "@cco2/carbon-weight/dist/house/index";
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
        heater: houseConsumption.type as HeaterE,
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
   *
   * @param props - a dic with props.
   */
  calculate(props: HouseT): void {
    console.log(props);
    this.emission = props.heater ? getEmission(props) : 0;
  }
}
