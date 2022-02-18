import { useTranslation } from "react-i18next";
import { useMemo } from "react";

import Select, { SelectOption } from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { NoCO2 } from "./NoCO2/NoCO2";
import { ConsumptionSlider } from "./ConsumptionSlider/ConsumptionSlider";
import { Gas } from "./Gas/Gas";
import WithLabel from "components/WithLabel/WithLabel";
import { HeaterE } from "@cco2/carbon-weight/dist/house/types";

const SelectConsumingHome = ({
  departments,
  department,
  surface,
  buildingYear,
  consumption,
  type,
  onChangeDepartment,
  onChangeSurface,
  onChangeBuildingYear,
  onChangeConsumption,
  onChangeType,
}: {
  departments: SelectOption[];
  department: string;
  surface: number;
  buildingYear: number;
  consumption: number;
  type: string;
  onChangeDepartment: (value: string) => void;
  onChangeSurface: (value: number) => void;
  onChangeBuildingYear: (value: number) => void;
  onChangeConsumption: (value: number) => void;
  onChangeType: (value: string) => void;
}): JSX.Element => {
  const { t } = useTranslation();
  const items = t("consuming.home.items", {
    returnObjects: true,
  }) as Record<string, string>;
  const options = useMemo(() => {
    return Object.keys(items).map(item => {
      return {
        title: items[item],
        value: item,
      };
    });
  }, [items]);

  const onChangeTypeCallback = (value: unknown) => {
    onChangeType(String(value));
  };

  // mapping a type of consuming to a component.
  const MAPPING_TYPE_TO_COMPONENTS: Record<string, JSX.Element> =
    useMemo(() => {
      return {
        [HeaterE.electric]: <NoCO2 />,
        heat_pump: <NoCO2 />,
        thermal_solar: <NoCO2 />,
        [HeaterE.fuelOil]: (
          <Gas
            onChangeBuildingYear={onChangeBuildingYear}
            onChangeSurface={onChangeSurface}
            onChangeDepartment={onChangeDepartment}
            departments={departments}
            department={department}
            surface={surface}
            buildingYear={buildingYear}
          />
        ),
        [HeaterE.wood]: (
          <ConsumptionSlider
            onChangeConsumption={onChangeConsumption}
            consumption={consumption}
            min={0}
            max={10000}
            postfix={t("Units.kg")}
          />
        ),
        [HeaterE.urban]: <NoCO2 />,
        [HeaterE.GPL]: (
          <Gas
            onChangeBuildingYear={onChangeBuildingYear}
            onChangeSurface={onChangeSurface}
            onChangeDepartment={onChangeDepartment}
            departments={departments}
            department={department}
            surface={surface}
            buildingYear={buildingYear}
          />
        ),
        propane: (
          <ConsumptionSlider
            onChangeConsumption={onChangeConsumption}
            consumption={consumption}
            min={0}
            max={10000}
            postfix={t("Units.kg")}
          />
        ),
      };
    }, [departments]);

  return (
    <SelectConsumingWrapper>
      <WithLabel noBackground label={t("consuming.home.type_of_heating")}>
        <Select
          onChange={onChangeTypeCallback}
          defaultValue={type}
          items={options}
          icon="/types/home.svg"
        />
      </WithLabel>
      {MAPPING_TYPE_TO_COMPONENTS[type]}
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingHome;
