import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Wrapper = styled(Link)<{ color: string }>`
  padding: 0 3rem;
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  margin-top: 4rem;
  flex-wrap: wrap;
  color: ${props => props.theme.colors[props.color]};
  text-align: center;
  transition: transform 0.2s;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.colors[props.color]};
  }
  &:last-child {
    padding-right: 0;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Percentage = styled.div`
  padding-left: 1rem;
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Image = styled(SVG)<{ color: string }>`
  width: 80%;
  max-width: 100px;
  fill: ${props => props.theme.colors[props.color]};
`;

const Amount = styled.div`
  padding: 1rem;
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Average = styled.div`
  font-size: 80%;
  opacity: 0.7;
  text-align: left;
  margin-top: -1rem;
`;

export interface ConsumingTypeItem {
  id: string;
  image: string;
  color?: string;
  url?: string;
  proportion?: number;
  value?: number;
  average?: number;
}

const ConsumingTypeListItem = ({
  type,
}: {
  type: ConsumingTypeItem;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper color={type.color ?? ""} to={type.url ?? ""}>
      <Line>
        <Image color={type.color ?? ""} src={getImagePath(type.image)} />
        <Percentage>
          {(type.proportion ?? 0).toFixed(0)} {t("Units.percentage")}
        </Percentage>
      </Line>
      <Amount>
        {(type.value ?? 0).toFixed(0)} {t("Units.kg")}
        {t("co2")}
      </Amount>
      {type.average ? (
        <Average>
          {t("national_average")} {(type.average ?? 0).toFixed(0)}{" "}
          {t("Units.kg")} {t("co2")}
        </Average>
      ) : null}
    </Wrapper>
  );
};

export default ConsumingTypeListItem;
