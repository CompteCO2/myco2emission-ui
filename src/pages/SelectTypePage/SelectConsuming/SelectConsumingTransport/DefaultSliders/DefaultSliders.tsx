import { Slider } from "components/Slider/Slider";
import { useTranslation } from "react-i18next";

export const DefaultSliders = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Slider
        noBackground
        label={t("consumings.transport.cunsomption")}
        postfix={t("consumings.transport.cunsomption_per_km")}
        min={0}
        max={17}
        defaultValue={5}
        // eslint-disable-next-line no-console
        onChange={(value: number) => console.log(value)}
      />
      <Slider
        noBackground
        label={t("consumings.transport.annual_mileage")}
        postfix={t("dimentions.km")}
        min={0}
        max={40000}
        defaultValue={20000}
        // eslint-disable-next-line no-console
        onChange={(value: number) => console.log(value)}
      />
    </>
  );
};
