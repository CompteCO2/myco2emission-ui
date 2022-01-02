import { useTranslation } from "react-i18next";
import { Fly } from "stores/fly";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.styleColor1};
  display: flex;
`;

const Left = styled.div``;

const Right = styled.div``;

const TopLine = styled.div`
  color: ${props => props.theme.colors.styleColor3};
`;

const PassagerNumber = styled.div`
  display: inline-block;
  font-size: 120%;
`;

const Type = styled.div`
  padding-left: 1rem;
  display: inline-block;
`;

export const FliesListItem = ({ fly }: { fly: Fly }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Left>
        <TopLine>
          <PassagerNumber>
            {fly.travelNumber} {t("consumings.fly.list.travelNumber")}
          </PassagerNumber>
          <Type>{t(`consumings.fly.type.${fly.type}`)}</Type>
        </TopLine>
      </Left>
      <Right></Right>
      {fly.destination}
    </Wrapper>
  );
};
