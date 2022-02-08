import { useTranslation } from "react-i18next";
import { useCallback, useMemo, useState } from "react";

import Select, { SelectOption } from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { NoCO2 } from "./NoCO2/NoCO2";
import { ConsumptionSlider } from "./ConsumptionSlider/ConsumptionSlider";
import { Gas } from "./Gas/Gas";
import WithLabel from "components/WithLabel/WithLabel";
import { HeaterE } from "@cco2/carbon-weight/dist/house/types";

const SelectConsumingHome = ({
  departments,
}: {
  departments: SelectOption[];
}): JSX.Element => {
  const { t } = useTranslation();
  const [homeConsumingType, setHomeConsumingType] = useState<number>(0);
  const items = t("consuming.home.items", {
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
        [HeaterE.electric]: <NoCO2 />,
        [HeaterE.fuelOil]: <Gas departments={departments} />,
        [HeaterE.wood]: <NoCO2 />,
        [HeaterE.fuelOil]: (
          <ConsumptionSlider
            min={0}
            max={10000}
            postfix={t("Units.liter")}
            defaultValue={5000}
          />
        ),
        [HeaterE.urban]: <NoCO2 />,
        [HeaterE.GPL]: <Gas departments={departments} />,
      };
    }, [departments]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <SelectConsumingWrapper onCheckout={() => {}}>
      <WithLabel noBackground label={t("consuming.home.type_of_heating")}>
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
