import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 3rem;
  text-align: center;
  color: var(--brand-color3);
  max-width: 80%;
  margin: 0 auto;
`;

export const NoCO2 = (): JSX.Element => {
  const { t } = useTranslation();

  return <Wrapper>{t("consuming.transport.no_co2")}</Wrapper>;
};
