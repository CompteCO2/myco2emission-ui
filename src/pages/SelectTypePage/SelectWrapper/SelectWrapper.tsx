import styled from "styled-components";

import { Checkout } from "components/Checkout/Checkout";
import { useCallback } from "react";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const onCheckoutCallback = useCallback(() => {
    onCheckout();
    history.push("/");
  }, []);

  return (
    <Wrapper>
      {children}
      <Checkout onClick={onCheckoutCallback} />
    </Wrapper>
  );
};

export default SelectConsumingWrapper;
