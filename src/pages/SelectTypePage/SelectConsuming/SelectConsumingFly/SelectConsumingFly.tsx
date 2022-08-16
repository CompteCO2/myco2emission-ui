import { SelectOption } from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { Fly } from "stores/consumptions/fly";
import AddFly from "./AddFly/AddFly";
import { useCallback } from "react";

import { FliesList, FlyWithFullAirportsName } from "./FliesList/FliesList";

const SelectConsumingFly = ({
  flies,
  airports,
  onAdd,
  onDeleteItem,
  onCheckout,
}: {
  flies: FlyWithFullAirportsName[];
  airports: SelectOption[];
  onAdd: (data: Fly) => void;
  onDeleteItem: (index: number) => void;
  onCheckout: (props: Fly[]) => void;
}): JSX.Element => {
  // on checkout.
  const onCheckoutCallback = useCallback(() => {
    onCheckout(flies);
  }, [flies]);

  return (
    <SelectConsumingWrapper onCheckout={onCheckoutCallback}>
      <FliesList flies={flies} onDeleteItem={onDeleteItem} />
      <AddFly airports={airports} onAdd={onAdd} />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFly;
