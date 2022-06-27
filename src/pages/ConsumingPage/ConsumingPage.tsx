import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { observer } from "mobx-react";

import Header from "components/Header/Header";
import { useRootStore } from "providers/RootStoreProvider";
import ConsumingTypeListContainer from "./ConsumingTypeList/ConsumingTypeListContainer";
import MainLayout from "layouts/main";
import { getImagePath } from "helpers/image";

const Tip = styled.p`
  padding: 0.5rem 0 1rem 0;
  color: ${props => props.theme.colors.styleColor3};
`;

const Total = styled.div`
  font-size: 7vh;
  text-align: center;
  color: ${props => props.theme.colors.styleColor4};
`;

const ScoreImg = styled.img`
  width: 100%;
`;

const ConsumingPage = observer((): JSX.Element => {
  const { t } = useTranslation();
  const { carbonFootprintStore } = useRootStore();

  return (
    <MainLayout>
      <Header title={t("pages.consuming.title")} />
      {!carbonFootprintStore.isComputed && (
        <Tip>{t("pages.consuming.tip")}</Tip>
      )}
      {carbonFootprintStore.isComputed && (
        <Total>
          {(carbonFootprintStore.sum / 1000).toFixed(2)}
          {` ${t("Units.t")}${t("co2")}`}
        </Total>
      )}
      <ConsumingTypeListContainer />
      <ScoreImg src={getImagePath("/carbon_scores/average.png")} />
    </MainLayout>
  );
});

export default ConsumingPage;
