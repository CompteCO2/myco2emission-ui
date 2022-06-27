import { useCallback, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import SelectConsumingFood from "./SelectConsumingFood";
import { useRootStore } from "providers/RootStoreProvider";

import { Checkout } from "components/Checkout/Checkout";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
`;

const Disclaimer = styled.p`
  padding: 0.5rem 0 1rem 0;
`;

/**
 * A container to connect food consumption with a store.
 */
const SelectConsumingFoodContainer = observer((): JSX.Element => {
  const { foodConsumption } = useRootStore();
  const [diclamerRead, setDisclamerRead] = useState(true);

  // Disclamer Read
  const onReadCallback = () => setDisclamerRead(true);

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
    <Wrapper>
      {!diclamerRead && (
        <Disclaimer>
          DISCLAMER
          <Checkout onClick={onReadCallback} />
        </Disclaimer>
      )}
      {diclamerRead && (
        <SelectConsumingFood
          values={foodConsumption.consumptionByFood}
          maxValue={foodConsumption.maxValue}
          onChange={onChangeCallback}
          onCheckout={onCheckoutCallback}
        />
      )}
    </Wrapper>
  );
});

export default SelectConsumingFoodContainer;
