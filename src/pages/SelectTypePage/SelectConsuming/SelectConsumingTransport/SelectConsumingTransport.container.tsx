import { ConsumptionT } from "@cco2/carbon-weight/dist/vehicle/types";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useRootStore } from "providers/RootStoreProvider";
import { useCallback } from "react";
import SelectConsumingTransport from "./SelectConsumingTransport";

/**
 * A container to connect food consumption with a store.
 */
const SelectConsumingTransportContainer = observer((): JSX.Element => {
  const { transportConsumption } = useRootStore();

  const onCheckoutCallback = useCallback(
    (consumption: ConsumptionT | null) => {
      transportConsumption.setConsumption(consumption);
    },
    [transportConsumption]
  );

  return (
    <SelectConsumingTransport
      currentConsumption={toJS(transportConsumption.currentConsumption)}
      onCheckout={onCheckoutCallback}
    />
  );
});

export default SelectConsumingTransportContainer;
