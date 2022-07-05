import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { observer } from "mobx-react";

import Header from "components/Header/Header";
import { useRootStore } from "providers/RootStoreProvider";
import { getImagePath } from "helpers/image";
import ConsumingTypeListContainer from "./ConsumingTypeList/ConsumingTypeListContainer";
import MainLayout from "layouts/main";

const RESULT_THRESHOLD = {
  champion: 735,
  cop21: 1345,
  national: 4525,
};

const Tip = styled.p`
  padding: 0.5rem 0 1rem 0;
  color: ${props => props.theme.colors.styleColor3};
`;

const Total = styled.div.attrs((props: { backgroundImage: string }) => props)`
  font-size: 48px;
  text-align: center;
  color: white;
  height: 145px;
  background-color: transparent;
  background-image: url("${props => props.backgroundImage}");
  background-size: 100% auto;
  background-repeat: no-repeat;
  position: relative;
  padding-top 15px;
  z-index: 5;
`;

const ScoreImg = styled.img`
  width: 80%;
`;

const ScoreWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;

const ScoreWrapperImg = styled.div`
  background-color: #f0f0f0;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  padding-top: 45px;
  margin-top: -45px;
  text-align: center;
  border-radius: 0px 0px 24px 24px;
  position: relative;
  z-index: 2;
`;

const ConsumingPage = observer((): JSX.Element => {
  const { t } = useTranslation();
  const { carbonFootprintStore } = useRootStore();

  const scoreWrapper = () => {
    const sum = carbonFootprintStore.sum;
    let backgroundImg = "";
    let pathImg = "";
    switch (true) {
      case sum < RESULT_THRESHOLD.champion:
        backgroundImg = "/carbon_scores/header-champion.png";
        pathImg = t("carbon_score_imgs.champion");
        break;
      case sum < RESULT_THRESHOLD.cop21:
        backgroundImg = "/carbon_scores/header-cop21.png";
        pathImg = t("carbon_score_imgs.cop21");
        break;
      case sum < RESULT_THRESHOLD.national:
        backgroundImg = "/carbon_scores/header-france.png";
        pathImg = t("carbon_score_imgs.france");
        break;
      default:
        backgroundImg = "/carbon_scores/header-bad.png";
        pathImg = t("carbon_score_imgs.bad");
        break;
    }

    return (
      <ScoreWrapper>
        <Total backgroundImage={getImagePath(backgroundImg)}>
          {(carbonFootprintStore.sum / 1000).toFixed(2)}
          {` ${t("Units.t")}${t("co2")}`}
        </Total>
        <ScoreWrapperImg>
          <ScoreImg src={getImagePath(pathImg)} />
        </ScoreWrapperImg>
      </ScoreWrapper>
    );
  };

  return (
    <MainLayout>
      <Header title={t("pages.consuming.title")} />
      {!carbonFootprintStore.isComputed && (
        <Tip>{t("pages.consuming.tip")}</Tip>
      )}
      {carbonFootprintStore.isComputed && scoreWrapper()}
      <ConsumingTypeListContainer />
    </MainLayout>
  );
});

export default ConsumingPage;
