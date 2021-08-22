import styled from "styled-components";

const Wrapper = styled.div`
  .spinner {
    position: relative;
    display: inline-block;
    margin: 0 12.5% 100px;
    width: 5rem;
    height: 5rem;
    border: 2px solid ${props => props.theme.colors.styleColor1};
    border-radius: 50%;

    animation: spin 0.75s infinite linear;
  }

  .spinner::before,
  .spinner::after {
    left: -2px;
    top: -2px;
    display: none;
    position: absolute;
    content: "";
    width: inherit;
    height: inherit;
    border: inherit;
    border-radius: inherit;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner-1 {
    border-top-width: 0;
  }
`;

const Loader = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="spinner spinner-1"></div>
    </Wrapper>
  );
};

export default Loader;
