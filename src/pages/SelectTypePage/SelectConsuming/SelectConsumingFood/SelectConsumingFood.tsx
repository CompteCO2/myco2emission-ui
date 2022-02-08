import { useTranslation } from "react-i18next";

import { SelectOption } from "components/Select/Select";
import FoodTypeList from "./FoodTypeList/FoodTypeList";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { useMemo } from "react";

/**
 * Renders a select of food consumtion.
 */
const SelectConsumingFood = ({
  onChange,
  values,
  maxValue,
  onCheckout,
}: {
  onChange: (type: string, value: number) => void;
  values: Record<string, number>;
  maxValue: number;
  onCheckout: () => void;
}): JSX.Element => {
  const { t } = useTranslation();
  const foodTypes = t("consuming.food.items", {
    returnObjects: true,
  }) as Record<string, unknown>;

  // create a list of type options.
  const options = useMemo(() => {
    return Object.keys(foodTypes).map(item => {
      return {
        title: foodTypes[item],
        value: item,
      } as SelectOption;
    });
  }, [foodTypes]);

  return (
    <SelectConsumingWrapper onCheckout={onCheckout}>
      <FoodTypeList
        maxValue={maxValue}
        values={values}
        types={options}
        onChange={onChange}
      />
    </SelectConsumingWrapper>
  );
};

export default SelectConsumingFood;
