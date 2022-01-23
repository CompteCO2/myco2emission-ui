import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { observer } from "mobx-react";

import Header from "components/Header/Header";
import { useRootStore } from "providers/RootStoreProvider";
import ConsumingTypeListContainer from "./ConsumingTypeList/ConsumingTypeListContainer";

const Tip = styled.p`
  padding: 0.5rem 0 1rem 0;
  color: ${props => props.theme.colors.styleColor3};
`;

const Total = styled.div`
  font-size: 7vh;
  text-align: center;
  color: ${props => props.theme.colors.styleColor4};
`;

const ConsumingPage = observer((): JSX.Element => {
  const { t } = useTranslation();
  const { carbonFootprintStore } = useRootStore();

  return (
    <>
      <Header title={t("pages.consuming.title")} />
      <Tip>{t("pages.consuming.tip")}</Tip>
      <Total>
        {carbonFootprintStore.sum.toFixed(2)} {t("dimentions.kg")}
        {t("co2")}
      </Total>
      <ConsumingTypeListContainer />
    </>
  );
});

export default ConsumingPage;
