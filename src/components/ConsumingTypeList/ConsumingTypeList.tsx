import styled from "styled-components";

import ConsumingTypeListItem, {
  ConsumingTypeItem,
} from "./ConsumingTypeListItem/ConsumingTypeListItem";

const Wrapper = styled.section`
  display: flex;
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
