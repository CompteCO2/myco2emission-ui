import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import SelectConsumingHome from "./SelectConsumingHome";
import departments from "config/departments/fr.json";
import { SelectOption } from "components/Select/Select";

const SelectConsumingHomeContainer = observer((): JSX.Element => {
  const [departmentsOptions, setDepartmentsOptions] = useState<SelectOption[]>(
    []
  );

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

  return <SelectConsumingHome departments={departmentsOptions} />;
});

export default SelectConsumingHomeContainer;
