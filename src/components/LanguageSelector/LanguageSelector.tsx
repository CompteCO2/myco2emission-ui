import { Select } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Flag, { flagCodeType } from "national-flag-icons";
import Cookies from "js-cookie";

import config from "config/index.json";
import i18next from "i18next";
import { getDefaultLang } from "i18n";

const { Option } = Select;

const Wrapper = styled.div`
  position: absolute;
  top: 2%;
  right: 4%;
  z-index: 99;
`;

const StyledFlag = styled(Flag)`
  display: inline-block;
  top: 2px;
  position: relative;
`;

const Text = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;

const LanguageSelector = (): JSX.Element => {
  const { t } = useTranslation();

  const onLangChange = (value: string) => {
    Cookies.set("lang", value);
    i18next.changeLanguage(value);
  };

  return (
    <Wrapper>
      <Select defaultValue={getDefaultLang()} onChange={onLangChange}>
        {config.languages.map(lang => {
          return (
            <Option value={lang} key={lang}>
              <StyledFlag flagCode={lang as flagCodeType} />
              <Text>{t(`languages.${lang}`)}</Text>
            </Option>
          );
        })}
      </Select>
    </Wrapper>
  );
};

export default LanguageSelector;
