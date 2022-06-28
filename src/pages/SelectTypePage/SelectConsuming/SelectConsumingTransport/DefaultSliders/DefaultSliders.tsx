import { Slider } from "components/Slider/Slider";
import { useTranslation } from "react-i18next";

export const DefaultSliders = ({
  distanceByYear,
  cunsomptionPerKm,
  onChangeCunsomptionPerKm,
  onChangeAnnualMileage,
}: {
  distanceByYear: number;
  cunsomptionPerKm: number;
  onChangeCunsomptionPerKm: (cunsomption: number) => void;
  onChangeAnnualMileage: (mileage: number) => void;
}): JSX.Element => {
  const { t } = useTranslation();

  // on change cons.
  const onChangeCunsomptionPerKmCallback = (value: number) => {
    onChangeCunsomptionPerKm(value);
  };

  // on change mileage.
  const onChangeAnnualMileageCallback = (value: number) => {
    onChangeAnnualMileage(value);
  };

  return (
    <>
      <Slider
        noBackground
        label={t("consuming.transport.consumption")}
        postfix={t("consuming.transport.consumption_per_km")}
        min={0}
        max={17}
        defaultValue={cunsomptionPerKm}
        onChange={onChangeCunsomptionPerKmCallback}
      />
      <Slider
        noBackground
        label={t("consuming.transport.annual_mileage")}
        postfix={t("Units.km")}
        min={0}
        max={40000}
        step={500}
        defaultValue={distanceByYear}
        onChange={onChangeAnnualMileageCallback}
      />
    </>
  );
};
