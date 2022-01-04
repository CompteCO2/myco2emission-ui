import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FlyWithFullAirportsName } from "./FliesList";
import { ReactComponent as RoseSVG } from "../../../../../icons/rose.svg";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.styleColor1};
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin: 0;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  color: ${props => props.theme.colors.styleColor1};
  text-align: center;
  text-transform: none;
`;

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
  font-size: 90%;
`;

const Path = styled.div`
  margin-top: 0.5rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.styleColor3};
`;

const FlyClass = styled.div``;

export const FliesListItem = ({
  fly,
}: {
  fly: FlyWithFullAirportsName;
}): JSX.Element => {
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
        <Path>
          {t(`consumings.fly.list.path`, {
            arrivalName: fly.arrivalName,
            destinationName: fly.destinationName,
          })}
        </Path>
      </Left>
      <Right>
        <RoseSVG />
        <FlyClass>{t(`consumings.fly.class.${fly.class}`)}</FlyClass>
      </Right>
    </Wrapper>
  );
};
