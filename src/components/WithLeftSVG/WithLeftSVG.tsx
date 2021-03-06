import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";

const Wrapper = styled.div`
  display: flex;
`;

const StyledSVG = styled(SVG)``;

const Child = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
  width: 80%;

  @media screen and (max-width: 1000px) {
    width: 85%;
  }
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
