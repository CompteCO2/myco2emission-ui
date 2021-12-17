import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import AddFlyContainer from "./AddFly/AddFlyContainer";
import { FliesListContainer } from "./FliesList/FliesListContainer";

const SelectConsumingFly = (): JSX.Element => {
  return (
    <SelectConsumingWrapper
      onCheckout={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      <FliesListContainer />
      <AddFlyContainer />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFly;
