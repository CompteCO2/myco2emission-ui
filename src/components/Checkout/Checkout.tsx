import { CheckOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { darken, lighten } from "polished";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  right: 10%;
  bottom: 10%;
  cursor: pointer;

  .ant-avatar {
    ${props => {
      const color = lighten(0.4, props.theme.colors.styleColor2);

      return `box-shadow: 0 3px 6px -4px ${color}, 0 6px 16px ${color},
      0 9px 28px 8px ${color}`;
    }};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px !important;
      height: 40px !important;
    }

    background-color: #f8f8f8;
    color: ${props => props.theme.colors.styleColor3};
    transition: color, box-shadow 0.3s;

    &:hover {
      ${props => {
        const color = lighten(0.3, props.theme.colors.styleColor2);

        return `box-shadow: 0 3px 6px -4px ${color}, 0 6px 16px ${color},
      0 9px 28px 8px ${color}`;
      }};
      color: ${props => darken(0.2, props.theme.colors.styleColor3)} !important;
    }
  }
`;

export const Checkout = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <Wrapper onClick={onClick}>
      <Avatar
        size={{ xs: 40, sm: 54, md: 62, lg: 70, xl: 80, xxl: 100 }}
        icon={<CheckOutlined />}
      />
    </Wrapper>
  );
};
