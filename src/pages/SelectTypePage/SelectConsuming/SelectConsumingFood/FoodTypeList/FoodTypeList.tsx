import { SelectOption } from "components/Select/Select";
import FoodTypeListItem from "./FoodTypeListItem/FoodTypeListItem";

interface FoodTypeListProps {
  types: SelectOption[];
}

const FoodTypeList = ({ types }: FoodTypeListProps): JSX.Element => {
  return (
    <>
      {types.map(type => {
        return <FoodTypeListItem type={type} key={type.value} />;
      })}
    </>
  );
};

export default FoodTypeList;
