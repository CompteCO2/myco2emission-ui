import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { observer } from "mobx-react";

import Header from "components/Header/Header";
import Share from "components/Share/Share";
import { useRootStore } from "providers/RootStoreProvider";
import { getImagePath } from "helpers/image";
import ConsumingTypeListContainer from "./ConsumingTypeList/ConsumingTypeListContainer";
import MainLayout from "layouts/main";

const RESULT_THRESHOLD = {
  champion: 735,
  cop21: 1345,
  national: 4525,
};

const Footer = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const Link = styled.a`
  color: #a2b32b;
  font-size: 14px;
  text-align: center;
  display: block;
`;

const DataTitle = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
`;

const LogoList = styled.ul`
  width: 100%;
  margin-top: 40px;
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

const LogoCO2 = styled.img`
  width: 100px;
`;

const LogoOther = styled.img`
  width: 60px;
  margin-right: 10px;
`;

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
        backgroundImg = "/carbon_scores/header-cop21.png";
        pathImg = t("carbon_score_imgs.cop21");
        break;
      case sum < RESULT_THRESHOLD.cop21:
        backgroundImg = "/carbon_scores/header-champion.png";
        pathImg = t("carbon_score_imgs.champion");
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
      <Header
        title={t("pages.consuming.title")}
        avatar={{
          src: getImagePath("/ornaments/headband-flower-center.png"),
          alt: "Compte CO2 - Headband Illustration",
          size: "large",
        }}
      />
      {!carbonFootprintStore.isComputed && (
        <Tip>{t("pages.consuming.tip")}</Tip>
      )}
      {carbonFootprintStore.isComputed && scoreWrapper()}
      <ConsumingTypeListContainer />
      <Footer>
        <Link href={t("links.method")} target="_blank">
          {t("links.method_txt")}
        </Link>
        {carbonFootprintStore.isComputed && <Share />}
        <DataTitle>{t("share.title_data")}</DataTitle>

        <LogoList>
          <li>
            <a href={t("links.ccnucc")} target="_blank">
              <LogoOther src={getImagePath("/logos/CNUCC.png")} />
            </a>
          </li>
          <li>
            <a href={t("links.ademe")} target="_blank">
              <LogoOther src={getImagePath("/logos/ADEME.png")} />
            </a>
          </li>
          <li>
            <a href={t("links.citepa")} target="_blank">
              <LogoOther src={getImagePath("/logos/CITEPA.png")} />
            </a>
          </li>
          <li>
            <a href={t("links.beneffice")} target="_blank">
              <LogoOther src={getImagePath("/logos/UE.png")} />
            </a>
          </li>
          <li>
            <a href={t("links.cco2")} target="_blank">
              <LogoCO2 src={getImagePath("/cco2.png")} />
            </a>
          </li>
        </LogoList>
      </Footer>
    </MainLayout>
  );
});

export default ConsumingPage;
