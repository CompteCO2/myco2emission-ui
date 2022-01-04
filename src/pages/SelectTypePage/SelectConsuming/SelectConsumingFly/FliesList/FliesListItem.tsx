import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

import { FlyWithFullAirportsName } from "./FliesList";
import { ReactComponent as RoseSVG } from "../../../../../icons/rose.svg";
import { useCallback } from "react";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.styleColor1};
  display: flex;
  justify-content: space-between;
  position: relative;

  &:last-child {
    margin: 0;
  }
`;

const Delete = styled(CloseOutlined)`
  color: ${props => props.theme.colors.styleColor1};
  font-size: 140%;
  position: absolute;
  right: 3%;
  cursor: pointer;
  z-index: 10;
`;

const Left = styled.div``;

const Right = styled.div`
  padding-right: 7%;
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
  index,
  onClick,
}: {
  fly: FlyWithFullAirportsName;
  index: number;
  onClick: (index: number) => void;
}): JSX.Element => {
  const { t } = useTranslation();

  const onClickCallback = useCallback(() => {
    onClick(index);
  }, [index, onClick]);

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
      <Delete onClick={onClickCallback} />
    </Wrapper>
  );
};
