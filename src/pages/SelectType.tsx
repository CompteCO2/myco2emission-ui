import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router";

import SelectConsuming from "components/SelectConsuming/SelectConsuming";

interface SelectTypeMatch {
  type: string;
}

const SelectType = (): JSX.Element => {
  const { t } = useTranslation();
  const match = useRouteMatch<SelectTypeMatch>();
  const { type } = match.params;

  if (!type) {
    return <></>;
  }

  return (
    <SelectConsuming
      title={t(`pages.${type}.title`)}
      tip={t(`pages.${type}.tip`)}
    ></SelectConsuming>
  );
};

export default SelectType;
