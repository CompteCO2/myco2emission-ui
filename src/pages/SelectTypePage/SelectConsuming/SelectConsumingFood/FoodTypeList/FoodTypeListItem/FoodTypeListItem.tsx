import { Slider } from "antd";
import { useCallback, useState } from "react";
import styled from "styled-components";

import { SelectOption } from "components/Select/Select";
import { useTranslation } from "react-i18next";

interface FoodTypeListItemProps {
  type: SelectOption;
}

const Wrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const Tooltip = styled.div`
  font-size: 90%;
  text-align: center;
  color: ${props => props.theme.colors.styleColor2};
`;

const SliderWrapper = styled.div`
  width: 70%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 120%;
`;

const MAX_VALUE = 14;

const getFoodTypeListItemTooltip = (
  value: number | undefined,
  title: string
) => {
  return (
    <Tooltip>
      {value}
      {title}
    </Tooltip>
  );
};

const FoodTypeListItem = ({ type }: FoodTypeListItemProps): JSX.Element => {
  const [current, setCurrent] = useState(Math.ceil(MAX_VALUE / 2));
  const { t } = useTranslation();
  const title = t("consumings.food.portion");
  const onChangeCallback = useCallback(value => {
    setCurrent(value);
  }, []);

  return (
    <Wrapper>
      <Title>{type.title}</Title>
      <SliderWrapper>
        <Slider
          onChange={onChangeCallback}
          defaultValue={current}
          max={MAX_VALUE}
          tooltipVisible={false}
        />
        {getFoodTypeListItemTooltip(current, title)}
      </SliderWrapper>
    </Wrapper>
  );
};

export default FoodTypeListItem;
