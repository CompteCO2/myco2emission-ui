import { Select as AntSelect } from "antd";
import { SelectProps, SelectValue } from "antd/es/select/index";

import SVG from "react-inlinesvg";
import styled from "styled-components";

import { getImagePath } from "helpers/image";

const StyledSelect = styled(AntSelect)`
  width: 100%;
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const StyledSVG = styled(SVG)`
  width: 100%;
`;

export interface SelectOption {
  title: string;
  value: string;
}

export interface MySelectProps extends SelectProps<SelectValue> {
  items: SelectOption[];
  icon: string;
  className?: string;
}

const { Option } = AntSelect;

const Select = ({
  items,
  icon,
  className,
  ...rest
}: MySelectProps): JSX.Element => {
  return (
    <Wrapper className={className}>
      <StyledSVG src={getImagePath(icon)} />
      <StyledSelect
        defaultValue={items.length ? items[0].value : ""}
        {...(rest as any)}
      >
        {items.map(item => {
          return (
            <Option key={item.value} value={item.value}>
              {item.title}
            </Option>
          );
        })}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
