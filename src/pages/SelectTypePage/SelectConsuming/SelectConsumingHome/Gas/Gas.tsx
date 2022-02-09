import { Input } from "antd";
import Select, { SelectOption } from "components/Select/Select";
import { Slider } from "components/Slider/Slider";
import WithLabel from "components/WithLabel/WithLabel";
import WithLeftSVG from "components/WithLeftSVG/WithLeftSVG";
import { useTranslation } from "react-i18next";

export const Gas = ({
  departments,
  department,
  surface,
  buildingYear,
  onChangeDepartment,
  onChangeSurface,
  onChangeBuildingYear,
}: {
  departments: SelectOption[];
  department: string;
  surface: number;
  buildingYear: number;
  onChangeDepartment: (value: string) => void;
  onChangeSurface: (value: number) => void;
  onChangeBuildingYear: (value: number) => void;
}): JSX.Element => {
  const { t } = useTranslation();

  const onChangeDepartmentCallback = (value: unknown) => {
    onChangeDepartment(String(value));
  };

  const onChangeSurfaceCallback = (value: unknown) => {
    onChangeSurface(parseInt(String(value), 10));
  };

  const onChangeBuildingYearCallback = (value: unknown) => {
    onChangeBuildingYear(parseInt(String(value), 10));
  };

  return (
    <>
      <WithLabel noBackground label={t("consuming.home.gas.department")}>
        <Select
          onChange={onChangeDepartmentCallback}
          items={departments}
          defaultValue={department}
          icon="/icons/france.svg"
        />
      </WithLabel>

      <WithLabel noBackground label={t("consuming.home.gas.surface")}>
        <WithLeftSVG icon="/icons/surface.svg">
          <Input
            onChange={onChangeSurfaceCallback}
            type="number"
            value={surface}
          />
        </WithLeftSVG>
      </WithLabel>

      <Slider
        noBackground
        label={t("consuming.home.gas.year")}
        min={1972}
        max={2001}
        defaultValue={buildingYear}
        onChange={onChangeBuildingYearCallback}
      />
    </>
  );
};
