import styled from "styled-components";
import { useCallback } from "react";

import Header from "components/Header/Header";

const Wrapper = styled.div``;

const SelectConsuming = ({
  title,
  tip,
  children,
}: {
  title: string;
  tip: string;
  children: JSX.Element | null;
}): JSX.Element => {
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <Wrapper>
      <Header title={title} onBack={onBack} />
      <p>{tip}</p>
      <div>{children}</div>
    </Wrapper>
  );
};

export default SelectConsuming;
