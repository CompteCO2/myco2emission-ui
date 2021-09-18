import styled from "styled-components";

import { Checkout } from "components/Checkout/Checkout";

const Wrapper = styled.div`
  width: 80%;
  margin: 4rem auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 2rem auto;
  }
`;

const SelectConsumingWrapper = ({
  onCheckout,
  children,
}: {
  onCheckout: () => void;
  children?: unknown;
}): JSX.Element => {
  return (
    <Wrapper>
      {children}
      <Checkout onClick={onCheckout} />
    </Wrapper>
  );
};

export default SelectConsumingWrapper;
