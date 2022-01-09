import SelectConsumingFood from "./SelectConsumingFood";
import { useRootStore } from "providers/RootStoreProvider";
import { useCallback } from "react";

const SelectConsumingFoodContainer = (): JSX.Element => {
  const { foodConsumption } = useRootStore();
  const onChangeCallback = useCallback((type, value) => {
    foodConsumption.setConsumptionByFoodType(type, value);
  }, []);

  return (
    <SelectConsumingFood
      values={foodConsumption.consumptionByFood}
      maxValue={foodConsumption.maxValue}
      onChange={onChangeCallback}
    />
  );
};

export default SelectConsumingFoodContainer;
