import { Fly } from "stores/fly";
import { FliesListItem } from "./FliesListItem";

export const FliesList = ({ flies }: { flies: Fly[] }): JSX.Element => {
  return (
    <>
      {flies.map((fly, key) => {
        return <FliesListItem key={key} fly={fly} />;
      })}
    </>
  );
};
