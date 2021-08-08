import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";

const Wrapper = styled.div<{ color: string }>`
  padding: 0 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  color: ${props => props.theme.colors[props.color]};
  text-align: center;
  transition: transform 0.2s;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  &:last-child {
    padding-right: 0;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1px;
`;

const Percentage = styled.div`
  padding-left: 2rem;
  font-size: 5vh;
`;

const Image = styled(SVG)<{ color: string }>`
  width: 80%;
  max-width: 100px;
  fill: ${props => props.theme.colors[props.color]};
`;

const Amount = styled.div`
  padding: 1rem;
`;

export interface ConsumingTypeItem {
  id: string;
  image: string;
  color?: string;
}

const ConsumingTypeListItem = ({
  type,
}: {
  type: ConsumingTypeItem;
}): JSX.Element => {
  return (
    <Wrapper color={type.color ?? ""}>
      <Line>
        <Image color={type.color ?? ""} src={getImagePath(type.image)} />
        <Percentage>0%</Percentage>
      </Line>
      <Amount>0 kgCO2</Amount>
    </Wrapper>
  );
};

export default ConsumingTypeListItem;
