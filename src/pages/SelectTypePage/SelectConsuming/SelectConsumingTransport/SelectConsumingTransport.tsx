import { useTranslation } from "react-i18next";

import Select from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import WithLabel from "components/WithLabel/WithLabel";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Electric } from "./Electric/Electric";
import { DefaultSliders } from "./DefaultSliders/DefaultSliders";
import { ConsumptionT, FuelE } from "@cco2/carbon-weight/dist/vehicle/types";

const SelectConsumingTransport = ({
  onCheckout,
  currentConsumption,
}: {
  onCheckout: (props: ConsumptionT | null) => void;
  currentConsumption: ConsumptionT | null | undefined;
}): JSX.Element => {
  const { t } = useTranslation();

  // current type.
  const [fuelType, setFuelType] = useState<FuelE | null | undefined>();

  // set fuel type.
  useEffect(() => {
    setFuelType(currentConsumption?.fuel);
  }, []);

  // translate items.
  const items = t("consumings.transport.items", {
    returnObjects: true,
  }) as Record<string, string>;

  // on select type.
  const onSelectType = useCallback(
    item => {
      setFuelType(item);
    },
    [setFuelType]
  );

  // select options.
  const options = useMemo(() => {
    return Object.keys(items).map(item => {
      return {
        title: items[item],
        value: item,
      };
    });
  }, [items]);

  // mapping a type of consuming to a component.
  const MAPPING_TYPE_TO_COMPONENTS: Record<FuelE, JSX.Element> = useMemo(() => {
    return {
      [FuelE.LPG]: <DefaultSliders />,
      [FuelE.E85]: <DefaultSliders />,
      [FuelE.gasoil]: <DefaultSliders />,
      [FuelE.fuel]: <DefaultSliders />,
      [FuelE.electric]: (
        <Electric
          postfix={t("dimentions.km")}
          min={0}
          max={40000}
          defaultValue={20000}
        />
      ),
    };
  }, []);

  // on checkout.
  const onCheckoutCallback = useCallback(() => {
    console.log(fuelType);
    onCheckout(
      fuelType
        ? {
            fuel: fuelType,
          }
        : null
    );
  }, [fuelType]);

  return (
    <SelectConsumingWrapper onCheckout={onCheckoutCallback}>
      <WithLabel noBackground label={t("consumings.transport.fuel")}>
        <Select items={options} icon="/types/car.svg" onSelect={onSelectType} />
      </WithLabel>
      {fuelType ? MAPPING_TYPE_TO_COMPONENTS[fuelType] : null}
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingTransport;
