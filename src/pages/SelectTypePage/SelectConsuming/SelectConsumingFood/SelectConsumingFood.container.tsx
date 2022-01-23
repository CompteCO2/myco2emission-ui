import SelectConsumingFood from "./SelectConsumingFood";
import { useRootStore } from "providers/RootStoreProvider";
import { useCallback } from "react";
import { CARBON_FOOTPRINT_MODULES } from "stores/carbonFootprint";
import { observer } from "mobx-react";

/**
 * A container to connect food consumption with a store.
 */
const SelectConsumingFoodContainer = observer((): JSX.Element => {
  const { foodConsumption, carbonFootprint } = useRootStore();

  // on consumption change.
  const onChangeCallback = useCallback((type, value) => {
    foodConsumption.setConsumptionByFoodType(type, value);
  }, []);

  // on chekout changes.
  const onCheckoutCallback = useCallback(() => {
    carbonFootprint.calculate(CARBON_FOOTPRINT_MODULES.FOOD, {
      ...foodConsumption.consumptionByFood,
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
