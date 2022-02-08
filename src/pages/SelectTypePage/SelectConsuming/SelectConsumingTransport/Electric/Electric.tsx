import { Slider } from "components/Slider/Slider";
import { useTranslation } from "react-i18next";

export const Electric = ({
  postfix,
  min,
  max,
  distanceByYear,
  onChangeAnnualMileage,
}: {
  postfix: string;
  min: number;
  max: number;
  distanceByYear: number;
  onChangeAnnualMileage: (mileage: number) => void;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Slider
      noBackground
      label={t("consuming.transport.annual_mileage")}
      postfix={postfix}
      min={min}
      max={max}
      defaultValue={distanceByYear}
      onChange={onChangeAnnualMileage}
    />
  );
};
