import { useCallback } from "react";
import { observer } from "mobx-react";

import SelectConsumingFood from "./SelectConsumingFood";
import { useRootStore } from "providers/RootStoreProvider";

/**
 * A container to connect food consumption with a store.
 */
const SelectConsumingFoodContainer = observer((): JSX.Element => {
  const { foodConsumption } = useRootStore();

  // on consumption change.
  const onChangeCallback = useCallback((type, value) => {
    foodConsumption.setConsumptionByFoodType(type, value);
  }, []);

  // on chekout changes.
  const onCheckoutCallback = useCallback(() => {
    Object.keys(foodConsumption.consumptionByFood).forEach(key => {
      foodConsumption.setConsumptionByFoodType(
        key,
        foodConsumption.consumptionByFood[key]
      );
    });
  }, []);

  return (
    <SelectConsumingFood
      values={foodConsumption.consumptionByFood}
      maxValue={foodConsumption.maxValue}
      onChange={onChangeCallback}
      onCheckout={onCheckoutCallback}
    />
  );
});

export default SelectConsumingFoodContainer;
