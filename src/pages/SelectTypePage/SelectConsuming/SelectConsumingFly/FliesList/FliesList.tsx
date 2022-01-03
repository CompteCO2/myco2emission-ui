import { Fly } from "stores/fly";
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
}: {
  flies: FlyWithFullAirportsName[];
}): JSX.Element => {
  return (
    <Wrapper>
      {flies.map((fly, key) => {
        return <FliesListItem key={key} fly={fly} />;
      })}
    </Wrapper>
  );
};
