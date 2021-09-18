import { useTranslation } from "react-i18next";

import Select, { SelectOption } from "components/Select/Select";

const SelectConsumingHome = (): JSX.Element => {
  const { t } = useTranslation();
  const items = t("consumings.home.items", {
    returnObjects: true,
  }) as SelectOption[];

  return (
    <div>
      <Select items={items} icon="/types/home.svg" />
    </div>
  );
};

export default SelectConsumingHome;
