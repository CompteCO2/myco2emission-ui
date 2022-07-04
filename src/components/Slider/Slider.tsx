import { Slider as AntSlider } from "antd";
import { useCallback, useState } from "react";
import styled from "styled-components";

import WithLabel from "components/WithLabel/WithLabel";
import { addSpace } from "../../helpers/format";

const Wrapper = styled(WithLabel)`
  margin-top: 2rem;
`;

const SliderWrapper = styled.div`
  margin-top: 1rem;
`;

const Label = styled.div`
  text-align: center;
  color: var(--brand-color3);
  font-size: 120%;
`;

export const Slider = ({
  postfix = "",
  min,
  max,
  defaultValue,
  step,
  onChange,
  label,
  noBackground = false,
}: {
  postfix?: string;
  min: number;
  max: number;
  defaultValue: number;
  step?: number;
  onChange: (value: number) => void;
  label: string;
  noBackground?: boolean;
}): JSX.Element => {
  const [value, setValue] = useState<number>(defaultValue);
  const onChangeCallback = useCallback(
    newValue => {
      setValue(newValue);
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <Wrapper label={label} noBackground={noBackground}>
      <SliderWrapper>
        <Label>
          {addSpace(value)} {postfix}
        </Label>
        <AntSlider
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step}
          onChange={onChangeCallback}
        />
      </SliderWrapper>
    </Wrapper>
  );
};
