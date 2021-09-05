import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router";

import SelectConsuming from "components/SelectConsuming/SelectConsuming";
import SelectConsumingHome from "components/SelectConsuming/SelectConsumingHome/SelectConsumingHome";

const SelectTypes: Record<string, JSX.Element> = {
  home: <SelectConsumingHome />,
};

interface SelectTypeMatch {
  type: string;
}

const SelectType = (): JSX.Element => {
  const { t } = useTranslation();
  const match = useRouteMatch<SelectTypeMatch>();
  const { type } = match.params;
  const typeComponent = SelectTypes[type] ?? "";

  if (!type) {
    return <></>;
  }

  return (
    <SelectConsuming
      title={t(`pages.${type}.title`)}
      tip={t(`pages.${type}.tip`)}
    >
      {typeComponent ? typeComponent : null}
    </SelectConsuming>
  );
};

export default SelectType;
