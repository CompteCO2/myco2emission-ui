import { Slider } from "components/Slider/Slider";
import { useTranslation } from "react-i18next";

export const Electric = ({
  postfix,
  min,
  max,
  defaultValue,
}: {
  postfix: string;
  min: number;
  max: number;
  defaultValue: number;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Slider
      noBackground
      label={t("consumings.transport.annual_mileage")}
      postfix={postfix}
      min={min}
      max={max}
      defaultValue={defaultValue}
      // eslint-disable-next-line no-console
      onChange={(value: number) => console.log(value)}
    />
  );
};
