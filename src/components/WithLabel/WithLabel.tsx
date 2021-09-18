import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 100%;
  font-weight: 600;
  padding-bottom: 0.5rem;
  color: ${props => props.theme.colors.styleColor1};
`;

const Body = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

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
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default WithLabel;
