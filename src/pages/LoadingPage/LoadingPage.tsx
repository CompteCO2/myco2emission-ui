import styled from "styled-components";
import Loader from "components/Loader/Loader";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;

const LoadingPage = (): JSX.Element => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

export default LoadingPage;
