import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";

const Wrapper = styled.div`
  display: flex;
`;

const StyledSVG = styled(SVG)`
  width: 20px;
`;

const Child = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
`;

const WithLeftSVG: React.FunctionComponent<{
  icon: string;
  className?: string;
}> = ({ icon, className, children }): JSX.Element => {
  return (
    <Wrapper className={className}>
      <StyledSVG src={getImagePath(icon)} />
      <Child>{children}</Child>
    </Wrapper>
  );
};

export default WithLeftSVG;
