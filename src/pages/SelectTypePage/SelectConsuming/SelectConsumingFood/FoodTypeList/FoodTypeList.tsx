import { SelectOption } from "components/Select/Select";
import { useCallback } from "react";
import FoodTypeListItem from "./FoodTypeListItem/FoodTypeListItem";

/**
 * Renders a list of food types.
 */
const FoodTypeList = ({
  types,
  onChange,
  values,
  maxValue,
}: {
  types: SelectOption[];
  onChange: (type: string, value: number) => void;
  values: Record<string, number>;
  maxValue: number;
}): JSX.Element => {
  // on change a type value.
  const onChangeTypeValueCallback = useCallback(
    (type, value) => {
      onChange(type.value, value);
    },
    [onChange]
  );

  return (
    <>
      {types.map(type => {
        return (
          <FoodTypeListItem
            defaultValue={values[type.value]}
            max={maxValue}
            type={type}
            key={type.value}
            onSelect={onChangeTypeValueCallback}
          />
        );
      })}
    </>
  );
};

export default FoodTypeList;
