import { SelectOption } from "components/Select/Select";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { Fly } from "stores/consumptions/fly";
import AddFly from "./AddFly/AddFly";

import { FliesList, FlyWithFullAirportsName } from "./FliesList/FliesList";

const SelectConsumingFly = ({
  flies,
  airports,
  onAdd,
  onDeleteItem,
}: {
  flies: FlyWithFullAirportsName[];
  airports: SelectOption[];
  onAdd: (data: Fly) => void;
  onDeleteItem: (index: number) => void;
}): JSX.Element => {
  return (
    <SelectConsumingWrapper>
      <FliesList flies={flies} onDeleteItem={onDeleteItem} />
      <AddFly airports={airports} onAdd={onAdd} />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFly;
