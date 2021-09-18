import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const Title = styled.div``;

const WithLabel = ({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <Wrapper className={className}>
      <Title>{label}</Title>
      {children}
    </Wrapper>
  );
};

export default WithLabel;
