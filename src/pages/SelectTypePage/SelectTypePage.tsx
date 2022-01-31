import { useTranslation } from "react-i18next";
import { useRouteMatch } from "react-router";

import SelectConsuming from "pages/SelectTypePage/SelectConsuming/SelectConsuming";
import SelectConsumingHome from "pages/SelectTypePage/SelectConsuming/SelectConsumingHome/SelectConsumingHome";
import SelectConsumingFoodContainer from "./SelectConsuming/SelectConsumingFood/SelectConsumingFood.container";
import SelectConsumingTransportContainer from "./SelectConsuming/SelectConsumingTransport/SelectConsumingTransport.container";
import SelectConsumingFlyContainer from "./SelectConsuming/SelectConsumingFly/SelectConsumingFly.container";

const SelectTypes: Record<string, JSX.Element> = {
  home: <SelectConsumingHome />,
  transport: <SelectConsumingTransportContainer />,
  food: <SelectConsumingFoodContainer />,
  fly: <SelectConsumingFlyContainer />,
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
