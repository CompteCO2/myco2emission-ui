import { useTranslation } from "react-i18next";

import Select from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import WithLabel from "components/WithLabel/WithLabel";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NoCO2 } from "./NoCO2/NoCO2";
import { DefaultSliders } from "./DefaultSliders/DefaultSliders";
import { VehicleFuelE as FuelE } from "@cco2/carbon-weight/dist";
import { TConsumption } from "stores/consumptions/transport";

const SelectConsumingTransport = ({
  onCheckout,
  cunsomption,
}: {
  onCheckout: (props: TConsumption) => void;
  cunsomption: TConsumption;
}): JSX.Element => {
  const { t } = useTranslation();

  // current cunsomption.
  const [currentCunsomption, setCurrentCunsomption] =
    useState<TConsumption>(cunsomption);

  // set cunsomption.
  useEffect(() => {
    setCurrentCunsomption(cunsomption);
  }, [cunsomption]);

  // translate items.
  const items = t("consuming.transport.items", {
    returnObjects: true,
  }) as Record<string, string>;

  // on select fuel type.
  const onSelectType = useCallback(
    item => {
      setCurrentCunsomption({
        ...currentCunsomption,
        fuel: item,
      });
    },
    [currentCunsomption]
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

  // on change cunsomption per km.
  const onChangeCunsomptionPerKm = useCallback(
    value => {
      if (currentCunsomption) {
        setCurrentCunsomption({
          ...currentCunsomption,
          mpg: value,
        });
      }
    },
    [currentCunsomption]
  );

  // on change annual mileage.
  const onChangeAnnualMileage = useCallback(
    value => {
      if (currentCunsomption) {
        setCurrentCunsomption({
          ...currentCunsomption,
          distanceByYear: value,
        });
      }
    },
    [currentCunsomption]
  );

  // get a screen with default sliders.
  const getDefaultSliders = () => {
    return (
      <DefaultSliders
        onChangeCunsomptionPerKm={onChangeCunsomptionPerKm}
        onChangeAnnualMileage={onChangeAnnualMileage}
        distanceByYear={currentCunsomption?.distanceByYear ?? 0}
        cunsomptionPerKm={currentCunsomption?.mpg ?? 0}
      />
    );
  };

  // mapping a type of consuming to a component.
  const MAPPING_TYPE_TO_COMPONENTS: Record<string, JSX.Element> =
    useMemo(() => {
      return {
        [FuelE.LPG]: getDefaultSliders(),
        [FuelE.E85]: getDefaultSliders(),
        [FuelE.GNV]: getDefaultSliders(),
        [FuelE.gasoil]: getDefaultSliders(),
        [FuelE.fuel]: getDefaultSliders(),
        [FuelE.electric]: <NoCO2 />,
      };
    }, [currentCunsomption]);

  // on checkout.
  const onCheckoutCallback = useCallback(() => {
    onCheckout(currentCunsomption);
  }, [currentCunsomption]);

  return (
    <SelectConsumingWrapper onCheckout={onCheckoutCallback}>
      <WithLabel noBackground label={t("consuming.transport.fuel")}>
        <Select
          items={options}
          icon="/types/car.svg"
          onSelect={onSelectType}
          value={currentCunsomption?.fuel}
        />
      </WithLabel>
      {currentCunsomption?.fuel
        ? MAPPING_TYPE_TO_COMPONENTS[currentCunsomption.fuel]
        : null}
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingTransport;
