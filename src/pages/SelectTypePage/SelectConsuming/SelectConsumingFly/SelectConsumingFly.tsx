import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import AddFly from "./AddFly/AddFly";

const SelectConsumingFly = (): JSX.Element => {
  return (
    <SelectConsumingWrapper
      onCheckout={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
        <AddFly />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFly;
