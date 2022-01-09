import { useTranslation } from "react-i18next";

import { SelectOption } from "components/Select/Select";
import FoodTypeList from "./FoodTypeList/FoodTypeList";
import SelectConsumingWrapper from "pages/SelectTypePage/SelectWrapper/SelectWrapper";
import { useCallback, useMemo } from "react";

/**
 * Renders a select of food consumtion.
 */
const SelectConsumingFood = ({
  onChange,
  values,
  maxValue,
}: {
  onChange: (type: string, value: number) => void;
  values: Record<string, number>;
  maxValue: number;
}): JSX.Element => {
  const { t } = useTranslation();
  const foodTypes = t("consumings.food.items", {
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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <SelectConsumingWrapper onCheckout={() => {}}>
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
