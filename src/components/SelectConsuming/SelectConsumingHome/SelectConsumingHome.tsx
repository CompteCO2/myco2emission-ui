import { Select } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const SelectConsumingHome = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <label>{t("consumings.home.title")}</label>

      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
};

export default SelectConsumingHome;
