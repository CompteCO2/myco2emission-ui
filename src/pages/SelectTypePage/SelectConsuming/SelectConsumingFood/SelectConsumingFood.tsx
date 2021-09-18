import { useTranslation } from "react-i18next";

import { SelectOption } from "components/Select/Select";
import FoodTypeList from "./FoodTypeList/FoodTypeList";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";

const SelectConsumingFood = (): JSX.Element => {
  const { t } = useTranslation();
  const foodTypes = t("consumings.food.items", {
    returnObjects: true,
  }) as SelectOption[];

  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <SelectConsumingWrapper onCheckout={() => {}}>
      <FoodTypeList types={foodTypes} />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFood;
