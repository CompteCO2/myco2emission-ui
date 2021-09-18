import { SelectOption } from "components/Select/Select";
import { useTranslation } from "react-i18next";
import FoodTypeList from "./FoodTypeList/FoodTypeList";

const SelectConsumingFood = (): JSX.Element => {
  const { t } = useTranslation();
  const foodTypes = t("consumings.food.items", {
    returnObjects: true,
  }) as SelectOption[];

  return (
    <>
      <FoodTypeList types={foodTypes} />
    </>
  );
};

export default SelectConsumingFood;
