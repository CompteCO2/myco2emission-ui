import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import AddFlyContainer from "./AddFly/AddFlyContainer";

const SelectConsumingFly = (): JSX.Element => {
  return (
    <SelectConsumingWrapper
      onCheckout={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      <AddFlyContainer />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFly;
