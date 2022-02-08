import { Input } from "antd";
import Select, { SelectOption } from "components/Select/Select";
import { Slider } from "components/Slider/Slider";
import WithLabel from "components/WithLabel/WithLabel";
import WithLeftSVG from "components/WithLeftSVG/WithLeftSVG";
import { useTranslation } from "react-i18next";

export const Gas = ({
  departments,
}: {
  departments: SelectOption[];
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <WithLabel noBackground label={t("consuming.home.gas.department")}>
        <Select items={departments} icon="/icons/france.svg" />
      </WithLabel>

      <WithLabel noBackground label={t("consuming.home.gas.surface")}>
        <WithLeftSVG icon="/icons/surface.svg">
          <Input type="number" />
        </WithLeftSVG>
      </WithLabel>

      <Slider
        noBackground
        label={t("consuming.home.gas.year")}
        min={1972}
        max={2001}
        defaultValue={1980}
        // eslint-disable-next-line no-console
        onChange={(value: number) => console.log(value)}
      />
    </>
  );
};
