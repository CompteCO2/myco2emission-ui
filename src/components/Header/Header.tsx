import { PageHeader, PageHeaderProps } from "antd";
import styled from "styled-components";

const PageHeaderWrapper = styled(PageHeader)`
  .ant-page-header-heading {
    display: block;
  }
  .ant-page-header-heading-left {
    justify-content: center;
  }
  .ant-page-header-heading-title {
    font-size: 5vh;
    font-weight: normal;
  }
`;

const Header = (props: PageHeaderProps): JSX.Element => {
  return <PageHeaderWrapper {...props} />;
};

export default Header;
