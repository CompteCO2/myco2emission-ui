import { useTranslation } from "react-i18next";
import styled from "styled-components";
//
import { getImagePath } from "helpers/image";

const Title = styled.h1`
  margin-top: 60px;
  text-align: center;
  font-size: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ShareList = styled.div`
  margin-bottom: 60px;
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
  const value = 500;
  const { t } = useTranslation();
  const dataFb = `https://www.facebook.com/dialog/share?${new URLSearchParams({
    app_id: "724539778650793",
    href: t("share.link"),
  }).toString()}`;
  const dataTwitter = `https://twitter.com/share?${new URLSearchParams({
    url: t("share.link"),
    text: t("share.message", { value: value }),
  }).toString()}`;
  const dataLinkedin = `https://www.linkedin.com/sharing/share-offsite?${new URLSearchParams(
    {
      url: t("share.link"),
    }
  ).toString()}`;

  return (
    <Wrapper>
      <Title>Partager :</Title>
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
        <a href="mailto:">
          <ShareImg src={getImagePath("/icons/mail.png")} />
        </a>
      </ShareList>
    </Wrapper>
  );
};

export default Share;
