import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";

const Wrapper = styled.div`
  padding: 0 1rem;
`;

const Image = styled(SVG)`
  width: 100%;
`;

export interface ConsumingTypeItem {
  image: string;
}

const ConsumingTypeListItem = ({
  type,
}: {
  type: ConsumingTypeItem;
}): JSX.Element => {
  return (
    <Wrapper>
      <Image src={getImagePath(type.image)} />
    </Wrapper>
  );
};

export default ConsumingTypeListItem;
