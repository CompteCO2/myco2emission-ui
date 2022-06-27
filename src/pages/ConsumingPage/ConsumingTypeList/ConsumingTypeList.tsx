import styled from "styled-components";

import ConsumingTypeListItem, {
  ConsumingTypeItem,
} from "./ConsumingTypeListItem/ConsumingTypeListItem";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConsumingTypeList = ({
  types,
  isComputed,
}: {
  types: ConsumingTypeItem[];
  isComputed: boolean;
}): JSX.Element => {
  return (
    <Wrapper>
      {types.map((type, key) => {
        return (
          <ConsumingTypeListItem
            type={type}
            isComputed={isComputed}
            key={key}
          />
        );
      })}
    </Wrapper>
  );
};

export default ConsumingTypeList;
