import styled from "styled-components";

import ConsumingTypeListItem, {
  ConsumingTypeItem,
} from "./ConsumingTypeListItem/ConsumingTypeListItem";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConsumingTypeList = ({
  types,
}: {
  types: ConsumingTypeItem[];
}): JSX.Element => {
  return (
    <Wrapper>
      {types.map((type, key) => {
        return <ConsumingTypeListItem type={type} key={key} />;
      })}
    </Wrapper>
  );
};

export default ConsumingTypeList;
