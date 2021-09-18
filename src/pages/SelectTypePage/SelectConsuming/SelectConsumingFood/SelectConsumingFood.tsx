import { useTranslation } from "react-i18next";

import Select, { SelectOption } from "components/Select/Select";

const SelectConsumingFood = (): JSX.Element => {
  const { t } = useTranslation();
  const items = t("consumings.transport.items", {
    returnObjects: true,
  }) as SelectOption[];

  return (
    <div>
      <Select items={items} icon="/types/car.svg" />
    </div>
  );
};

export default SelectConsumingFood;
