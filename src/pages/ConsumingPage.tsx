import { useTranslation } from "react-i18next";

import ConsumingTypeList from "components/ConsumingTypeList/ConsumingTypeList";
import config from "config/consuming_types.json";
import styled from "styled-components";

const Tip = styled.p`
  padding: 0.5rem 0 1rem 0;
  color: ${props => props.theme.colors.styleColor3};
`;

const Total = styled.div`
  font-size: 7vh;
  text-align: center;
  color: ${props => props.theme.colors.styleColor4};
`;

const ConsumingPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("pages.consuming.title")}</h1>
      <Tip>{t("pages.consuming.tip")}</Tip>
      <Total>0 kgCO2</Total>
      <ConsumingTypeList types={config.items} />
    </>
  );
};

export default ConsumingPage;
