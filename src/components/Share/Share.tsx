import { useTranslation } from "react-i18next";
import styled from "styled-components";
//
import { useRootStore } from "providers/RootStoreProvider";
import { getImagePath } from "helpers/image";

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ShareList = styled.div`
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShareImg = styled.img`
  width: 64px;
  height: 64px;
`;

const Share = (): JSX.Element => {
  const { t } = useTranslation();
  const { carbonFootprintStore } = useRootStore();

  const dataFb = `https://www.facebook.com/dialog/share?${new URLSearchParams({
    app_id: "724539778650793",
    href: t("share.link"),
  }).toString()}`;
  const dataTwitter = `https://twitter.com/share?${new URLSearchParams({
    url: t("share.link"),
  }).toString()}`;
  const dataLinkedin = `https://www.linkedin.com/sharing/share-offsite?${new URLSearchParams(
    {
      url: t("share.link"),
    }
  ).toString()}`;

  return (
    <Wrapper>
      <Title>{t("share.title")}</Title>
      <ShareList>
        <a href={dataFb}>
          <ShareImg src={getImagePath("/icons/facebook.png")} />
        </a>
        <a href={dataTwitter}>
          <ShareImg src={getImagePath("/icons/twitter.png")} />
        </a>
        <a href={dataLinkedin}>
          <ShareImg src={getImagePath("/icons/linkedin.png")} />
        </a>
        <a
          href={`mailto:${t("share.mailto", {
            value: (carbonFootprintStore.sum / 1000).toFixed(2),
          })}`}
        >
          <ShareImg src={getImagePath("/icons/mail.png")} />
        </a>
      </ShareList>
    </Wrapper>
  );
};

export default Share;
