import SelectConsumingFood from "./SelectConsumingFood";
import { useRootStore } from "providers/RootStoreProvider";

const SelectConsumingFoodContainer = (): JSX.Element => {
  const { carbonFootprint } = useRootStore();

  return <SelectConsumingFood />;
};

export default SelectConsumingFoodContainer;
