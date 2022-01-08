import { Select as AntSelect, SelectProps } from "antd";
import styled from "styled-components";

import { BaseOptionType, DefaultOptionType } from "antd/lib/select";
import WithLeftSVG from "components/WithLeftSVG/WithLeftSVG";

const StyledSelect = styled(AntSelect)`
  width: 100%;
`;

export interface SelectOption {
  title: string;
  value: string;
}

export interface MySelectProps
  extends SelectProps<unknown, DefaultOptionType | BaseOptionType> {
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
    <WithLeftSVG className={className} icon={icon}>
      <StyledSelect defaultValue={items.length ? items[0].value : ""} {...rest}>
        {items.map(item => {
          return (
            <Option key={item.value} value={item.value}>
              {item.title}
            </Option>
          );
        })}
      </StyledSelect>
    </WithLeftSVG>
  );
};

export default Select;
