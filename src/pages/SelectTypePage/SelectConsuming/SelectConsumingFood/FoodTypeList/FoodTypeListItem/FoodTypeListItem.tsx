import { Slider } from "antd";
import { useCallback, useState } from "react";
import styled from "styled-components";

import { SelectOption } from "components/Select/Select";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  margin-bottom: 3rem;
  margin-top: 3rem;
  margin-left: 0;
  margin-right: 0;
  display: flex;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

const Tooltip = styled.div`
  font-size: 80%;
  text-align: center;
  color: ${props => props.theme.colors.styleColor2};
`;

const SliderWrapper = styled.div`
  width: 70%;
  padding-left: 30px;
`;

const Title = styled.div`
  font-size: 100%;
  width: 40%;
`;

/**
 * An item of a food type list.
 */
const FoodTypeListItem = ({
  type,
  onSelect,
  max,
  defaultValue,
}: {
  type: SelectOption;
  max: number;
  defaultValue: number;
  onSelect: (type: SelectOption, value: number) => void;
}): JSX.Element => {
  const [current, setCurrent] = useState(defaultValue);
  const { t } = useTranslation();
  const title = t("consuming.food.portion");
  const onChangeCallback = useCallback(value => {
    setCurrent(value);
    onSelect(type, value);
  }, []);

  return (
    <Wrapper>
      <Title>{type.title}</Title>
      <SliderWrapper>
        <Slider
          onChange={onChangeCallback}
          defaultValue={current}
          max={max}
          tooltipVisible={false}
        />
        <Tooltip>
          {current}
          {title}
        </Tooltip>
      </SliderWrapper>
    </Wrapper>
  );
};

export default FoodTypeListItem;
