import { useTranslation } from "react-i18next";
import { useCallback, useMemo, useState } from "react";

import Select from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { NoCO2 } from "./NoCO2/NoCO2";
import { ConsumptionSlider } from "./ConsumptionSlider/ConsumptionSlider";
import { Gas } from "./Gas/Gas";
import WithLabel from "components/WithLabel/WithLabel";

enum HOME_CONSUMTION_TYPES {
  ELECTRICITY = "ELECTRICITY",
  NATURAL_GAS = "NATURAL_GAS",
  COAL = "COAL",
  HEATING_OIL = "HEATING_OIL",
  DRINK = "DRINK",
  HEAP_PUMP = "HEAP_PUMP",
  SOLAR_THERMAL = "SOLAR_THERMAL",
  URBAN_HEATING = "URBAN_HEATING",
  PROPAN = "PROPAN",
}

const SelectConsumingHome = (): JSX.Element => {
  const { t } = useTranslation();
  const [homeConsumingType, setHomeConsumingType] = useState<number>(0);
  const items = t("consumings.home.items", {
    returnObjects: true,
  }) as Record<string, string>;
  const onSelectType = useCallback(
    item => {
      setHomeConsumingType(item);
    },
    [setHomeConsumingType]
  );
  const options = useMemo(() => {
    return Object.keys(items).map(item => {
      return {
        title: items[item],
        value: item,
      };
    });
  }, [items]);

  // mapping a type of consuming to a component.
  const MAPPING_TYPE_TO_COMPONENTS: Record<number, JSX.Element> =
    useMemo(() => {
      return {
        [HOME_CONSUMTION_TYPES.ELECTRICITY]: <NoCO2 />,
        [HOME_CONSUMTION_TYPES.NATURAL_GAS]: <Gas />,
        [HOME_CONSUMTION_TYPES.DRINK]: <NoCO2 />,
        [HOME_CONSUMTION_TYPES.HEAP_PUMP]: <NoCO2 />,
        [HOME_CONSUMTION_TYPES.SOLAR_THERMAL]: <NoCO2 />,
        [HOME_CONSUMTION_TYPES.URBAN_HEATING]: <NoCO2 />,
        [HOME_CONSUMTION_TYPES.COAL]: (
          <ConsumptionSlider
            min={0}
            max={10000}
            postfix={t("dimentions.kg")}
            defaultValue={5000}
          />
        ),
        [HOME_CONSUMTION_TYPES.HEATING_OIL]: (
          <ConsumptionSlider
            min={0}
            max={10000}
            postfix={t("dimentions.liter")}
            defaultValue={5000}
          />
        ),
        [HOME_CONSUMTION_TYPES.PROPAN]: (
          <ConsumptionSlider
            min={0}
            max={10000}
            postfix={t("dimentions.liter")}
            defaultValue={5000}
          />
        ),
      };
    }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <SelectConsumingWrapper onCheckout={() => {}}>
      <WithLabel noBackground label={t("consumings.home.type_of_heating")}>
        <Select
          items={options}
          icon="/types/home.svg"
          onSelect={onSelectType}
        />
      </WithLabel>
      {MAPPING_TYPE_TO_COMPONENTS[homeConsumingType]}
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingHome;
