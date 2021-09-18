import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router";

import SelectConsuming from "pages/SelectTypePage/SelectConsuming/SelectConsuming";
import SelectConsumingHome from "pages/SelectTypePage/SelectConsuming/SelectConsumingHome/SelectConsumingHome";
import SelectConsumingTransport from "pages/SelectTypePage/SelectConsuming/SelectConsumingTransport/SelectConsumingTransport";
import SelectConsumingFood from "pages/SelectTypePage/SelectConsuming/SelectConsumingFood/SelectConsumingFood";

const SelectTypes: Record<string, JSX.Element> = {
  home: <SelectConsumingHome />,
  transport: <SelectConsumingTransport />,
  food: <SelectConsumingFood />,
};

interface SelectTypeMatch {
  type: string;
}

const SelectTypePage = (): JSX.Element => {
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

export default SelectTypePage;
