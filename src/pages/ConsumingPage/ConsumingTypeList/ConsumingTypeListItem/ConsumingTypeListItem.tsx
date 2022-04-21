import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Wrapper = styled(Link)<{ color: string }>`
  width: 200px;
  margin: 5px;
  background-color: #f0f0f0;
  padding: 5px;
  display: block;
  text-decoration: none;
  flex-wrap: wrap;
  color: ${props => props.theme.colors[props.color]};
  text-align: center;
  transition: transform 0.2s;
  border-radius: 20px;
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

const Col = styled.div`
  display: block;
`;

const Image = styled(SVG)<{ color: string }>`
  width: 40%;
  max-width: 100px;
  margin: 10px;
  background-color: white;
  border-radius: 18px;
  fill: ${props => props.theme.colors[props.color]};
`;

const Percentage = styled.div`
  text-align: center;
  font-size: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Amount = styled.div`
  font-size: 0.8rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Average = styled.div`
  font-size: 80%;
  opacity: 0.7;
  margin-top: 0.8rem;
  line-height: 120%;
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
        <Col>
          <Percentage>
            {(type.proportion ?? 0).toFixed(0)} {t("Units.percentage")}
          </Percentage>
          <Amount>
            {(type.value ?? 0).toFixed(0)} {t("Units.kg")}
            {t("co2")}
          </Amount>
        </Col>
      </Line>

      {type.average ? (
        <Average>
          {t("national_average")}
          <br />
          {(type.average ?? 0).toFixed(0)} {t("Units.kg")} {t("co2")}
        </Average>
      ) : null}
    </Wrapper>
  );
};

export default ConsumingTypeListItem;
