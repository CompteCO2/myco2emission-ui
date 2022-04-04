import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useEffect } from "react";

const Wrapper = styled.div`
  padding-top: 3rem;
  text-align: center;
  color: var(--brand-color3);
  max-width: 80%;
  margin: 0 auto;
`;

export const NoCO2 = ({
  onChangeSurface,
}: {
  onChangeSurface: (value: number) => void;
}): JSX.Element => {
  const { t } = useTranslation();

  useEffect(() => {
    onChangeSurface(0);
  }, []);

  return <Wrapper>{t("consuming.home.no_co2")}</Wrapper>;
};
