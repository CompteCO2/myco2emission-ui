import { useTranslation } from "react-i18next";

import Select from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import WithLabel from "components/WithLabel/WithLabel";
import { useCallback, useMemo, useState } from "react";
import { Electric } from "./Electric/Electric";
import { DefaultSliders } from "./DefaultSliders/DefaultSliders";

enum TRANSPORT_CONSUMTION_TYPES {
  NO_CAR = "NO_CAR",
  DIESEL = "DIESEL",
  GASOLINE = "GASOLINE",
  ELECTRIC = "ELECTRIC",
  E85 = "E85",
  LPG = "LPG",
}

const SelectConsumingTransport = (): JSX.Element => {
  const { t } = useTranslation();
  const [homeConsumingType, setHomeConsumingType] = useState<number>(0);
  const items = t("consumings.transport.items", {
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
        [TRANSPORT_CONSUMTION_TYPES.LPG]: <DefaultSliders />,
        [TRANSPORT_CONSUMTION_TYPES.E85]: <DefaultSliders />,
        [TRANSPORT_CONSUMTION_TYPES.GASOLINE]: <DefaultSliders />,
        [TRANSPORT_CONSUMTION_TYPES.DIESEL]: <DefaultSliders />,
        [TRANSPORT_CONSUMTION_TYPES.ELECTRIC]: (
          <Electric
            postfix={t("dimentions.km")}
            min={0}
            max={40000}
            defaultValue={20000}
          />
        ),
      };
    }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <SelectConsumingWrapper onCheckout={() => {}}>
      <WithLabel noBackground label={t("consumings.transport.fuel")}>
        <Select items={options} icon="/types/car.svg" onSelect={onSelectType} />
      </WithLabel>
      {MAPPING_TYPE_TO_COMPONENTS[homeConsumingType]}
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingTransport;
