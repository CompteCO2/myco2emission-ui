import { PageHeader, PageHeaderProps } from "antd";
import styled from "styled-components";

const PageHeaderWrapper = styled(PageHeader)`
  .ant-page-header-heading {
    display: block;
    margin-top: 2rem;
  }
  .ant-page-header-heading-left {
    justify-content: center;
  }
  .ant-page-header-heading-title {
    font-size: 2rem;
    font-weight: normal;
    text-overflow: initial;
    white-space: normal;
    overflow: hidden;
    text-align: center;
    color: #46579c;
    font: normal normal 800 40px/46px Martel Sans;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;

const Header = (props: PageHeaderProps): JSX.Element => {
  return <PageHeaderWrapper {...props} />;
};

export default Header;
