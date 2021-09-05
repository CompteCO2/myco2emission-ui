import { Select as AntSelect } from "antd";
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

export interface SelectOption {
  title: string;
  value: string;
}

const { Option } = AntSelect;

const Select = ({
  items,
  icon,
}: {
  items: SelectOption[];
  icon: string;
}): JSX.Element => {
  return (
    <Wrapper>
      <SVG src={getImagePath(icon)} />
      <StyledSelect defaultValue={items[0].value}>
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
