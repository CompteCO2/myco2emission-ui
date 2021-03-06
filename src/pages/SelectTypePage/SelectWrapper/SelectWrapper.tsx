import styled from "styled-components";
import { useHistory } from "react-router";

import { Checkout } from "components/Checkout/Checkout";

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  margin-left: 0;
  margin-right: 0;
`;

const SelectConsumingWrapper = ({
  onCheckout,
  children,
}: {
  onCheckout?: () => void;
  children?: unknown;
}): JSX.Element => {
  const history = useHistory();

  // checkout
  const onCheckoutCallback = () => {
    if (onCheckout) {
      onCheckout();
    }
    history.push("/");
  };

  return (
    <Wrapper>
      {children}
      <Checkout onClick={onCheckoutCallback} />
    </Wrapper>
  );
};

export default SelectConsumingWrapper;
