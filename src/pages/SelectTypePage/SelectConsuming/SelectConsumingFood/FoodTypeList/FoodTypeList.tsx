import { SelectOption } from "components/Select/Select";

interface FoodTypeListProps {
  types: SelectOption[];
}

const FoodTypeList = ({ types }: FoodTypeListProps): JSX.Element => {
  console.log(types);

  return <div></div>;
};

export default FoodTypeList;
