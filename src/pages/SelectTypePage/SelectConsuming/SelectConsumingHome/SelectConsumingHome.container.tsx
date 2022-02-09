import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import SelectConsumingHome from "./SelectConsumingHome";
import departments from "config/departments/fr.json";
import { SelectOption } from "components/Select/Select";
import { useRootStore } from "providers/RootStoreProvider";

const SelectConsumingHomeContainer = observer((): JSX.Element => {
  const { houseConsumption } = useRootStore();
  const [departmentsOptions, setDepartmentsOptions] = useState<SelectOption[]>(
    []
  );

  const onChangeDepartment = (value: string) => {
    houseConsumption.setDepartment(value);
  };

  const onChangeBuildingYear = (value: number) => {
    houseConsumption.setBuildingYear(value);
  };

  const onChangeSurface = (value: number) => {
    houseConsumption.setSurface(value);
  };

  const onChangeConsumption = (value: number) => {
    houseConsumption.setConsumption(value);
  };

  const onChangeType = (value: string) => {
    houseConsumption.setType(value);
  };

  useEffect(() => {
    setDepartmentsOptions(
      departments.map(department => {
        return {
          value: department.DEP,
          title: department.NCC,
        } as SelectOption;
      })
    );
  }, []);

  return (
    <SelectConsumingHome
      consumption={houseConsumption.consumption}
      surface={houseConsumption.surface}
      buildingYear={houseConsumption.buildingYear}
      department={houseConsumption.department}
      type={houseConsumption.type}
      departments={departmentsOptions}
      onChangeDepartment={onChangeDepartment}
      onChangeSurface={onChangeSurface}
      onChangeBuildingYear={onChangeBuildingYear}
      onChangeConsumption={onChangeConsumption}
      onChangeType={onChangeType}
    />
  );
});

export default SelectConsumingHomeContainer;
