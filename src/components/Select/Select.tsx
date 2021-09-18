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

const StyledSVG = styled(SVG)`
  width: 100%;
`;

export interface SelectOption {
  title: string;
  value: string;
}

const { Option } = AntSelect;

const Select = ({
  items,
  icon,
  className,
}: {
  items: SelectOption[];
  icon: string;
  className?: string;
}): JSX.Element => {
  return (
    <Wrapper className={className}>
      <StyledSVG src={getImagePath(icon)} />
      <StyledSelect defaultValue={items.length ? items[0].value : ""}>
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
