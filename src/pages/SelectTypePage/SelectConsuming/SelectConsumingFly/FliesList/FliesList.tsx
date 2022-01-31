import { Fly } from "stores/consumptions/fly";
import styled from "styled-components";
import { FliesListItem } from "./FliesListItem";

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

export interface FlyWithFullAirportsName extends Fly {
  destinationName: string;
  arrivalName: string;
}

export const FliesList = ({
  flies,
  onDeleteItem,
}: {
  flies: FlyWithFullAirportsName[];
  onDeleteItem: (index: number) => void;
}): JSX.Element => {
  return (
    <Wrapper>
      {flies.map((fly, key) => {
        return (
          <FliesListItem
            onClick={onDeleteItem}
            index={key}
            key={key}
            fly={fly}
          />
        );
      })}
    </Wrapper>
  );
};
