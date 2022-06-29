import { useCallback } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { FoodE } from "@cco2/carbon-weight/dist";

import SelectConsumingFood from "./SelectConsumingFood";
import { useRootStore } from "providers/RootStoreProvider";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

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
        foodConsumption.consumptionByFood[key as keyof typeof FoodE]
      );
    });
  }, []);

  return (
    <Wrapper>
      <SelectConsumingFood
        values={foodConsumption.consumptionByFood}
        maxValue={foodConsumption.maxValue}
        onChange={onChangeCallback}
        onCheckout={onCheckoutCallback}
      />
    </Wrapper>
  );
});

export default SelectConsumingFoodContainer;
