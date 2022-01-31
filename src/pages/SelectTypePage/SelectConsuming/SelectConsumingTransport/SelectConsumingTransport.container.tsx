import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useRootStore } from "providers/RootStoreProvider";
import { useCallback } from "react";
import { CARBON_FOOTPRINT_MODULES } from "stores/carbonFootprint";
import { TConsumption } from "stores/consumptions/transport";
import SelectConsumingTransport from "./SelectConsumingTransport";

/**
 * A container to connect food consumption with a store.
 */
const SelectConsumingTransportContainer = observer((): JSX.Element => {
  const { transportConsumption, carbonFootprintStore } = useRootStore();

  const onCheckoutCallback = useCallback(
    (consumption: TConsumption) => {
      transportConsumption.setTConsumption(consumption);
      carbonFootprintStore.calculate(CARBON_FOOTPRINT_MODULES.TRANSPORT, {
        ...consumption,
      });
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
