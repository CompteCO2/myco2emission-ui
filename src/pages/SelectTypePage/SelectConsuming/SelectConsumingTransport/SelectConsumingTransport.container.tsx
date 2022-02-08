import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useCallback } from "react";

import { useRootStore } from "providers/RootStoreProvider";
import { TConsumption } from "stores/consumptions/transport";
import SelectConsumingTransport from "./SelectConsumingTransport";

/**
 * A container to connect food consumption with a store.
 */
const SelectConsumingTransportContainer = observer((): JSX.Element => {
  const { transportConsumption } = useRootStore();

  const onCheckoutCallback = useCallback(
    (consumption: TConsumption) => {
      transportConsumption.setTConsumption(consumption);
    },
    [transportConsumption]
  );

  return (
    <SelectConsumingTransport
      cunsomption={toJS(transportConsumption.currentConsumption)}
      onCheckout={onCheckoutCallback}
    />
  );
});

export default SelectConsumingTransportContainer;
