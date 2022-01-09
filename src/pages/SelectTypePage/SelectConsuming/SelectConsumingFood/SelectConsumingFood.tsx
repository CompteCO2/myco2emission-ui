import { useTranslation } from "react-i18next";

import { SelectOption } from "components/Select/Select";
import FoodTypeList from "./FoodTypeList/FoodTypeList";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { useMemo } from "react";

export enum CONSUMING_FOOD_TYPE {
  RED_MEAT = "RED_MEAT",
  WHITE_MEAT = "WHITE_MEAT",
  FIST = "FIST",
  SEASON_FRUITS = "SEASON_FRUITS",
  EXOTIC_FRUITS = "EXOTIC_FRUITS",
  CHEESE = "CHEESE",
  RICE = "RICE",
  ALCOHOL = "ALCOHOL",
  SOFT = "SOFT",
}

const SelectConsumingFood = (): JSX.Element => {
  const { t } = useTranslation();
  const foodTypes = t("consumings.food.items", {
    returnObjects: true,
  }) as Record<string, unknown>;
  const options = useMemo(() => {
    return Object.keys(foodTypes).map(item => {
      return {
        title: foodTypes[item],
        value: item,
      } as SelectOption;
    });
  }, [foodTypes]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <SelectConsumingWrapper onCheckout={() => {}}>
      <FoodTypeList types={options} />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFood;
