import { Slider } from "components/Slider/Slider";
import { useTranslation } from "react-i18next";

export const ConsumptionSlider = ({
  postfix,
  min,
  max,
  onChangeConsumption,
  consumption,
}: {
  postfix: string;
  min: number;
  max: number;
  consumption: number;
  onChangeConsumption: (value: number) => void;
}): JSX.Element => {
  const { t } = useTranslation();

  const onChangeConsumptionCallback = (value: unknown) => {
    onChangeConsumption(parseInt(String(value), 10));
  };

  return (
    <Slider
      noBackground
      label={t("consuming.home.consumption")}
      postfix={postfix}
      min={min}
      max={max}
      defaultValue={consumption}
      onChange={onChangeConsumptionCallback}
    />
  );
};
