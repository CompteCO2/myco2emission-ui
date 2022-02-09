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

export class HouseEmmision extends EmmisionStore {
  public emission = 0;

  constructor(rootStore: RootStore) {
    super(rootStore);

    // react to change consumption.
    autorun(() => {
      this.calculate({
        built: YearE.old,
        surface: rootStore.houseConsumption.surface,
        emission: rootStore.houseConsumption.consumption,
        type: HouseE.apartment,
        region: rootStore.houseConsumption.department,
        heater: rootStore.houseConsumption.type as HeaterE,
      });
    });
  }

  /**
   *
   * @param props - a dic with props.
   */
  calculate(props: HouseT): void {
    this.emission = props.heater ? getEmission(props) : 0;
  }
}
