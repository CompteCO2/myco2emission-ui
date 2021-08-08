import ConsumingTypeList from "components/ConsumingTypeList/ConsumingTypeList";
import config from "config/consuming_types.json";

const ConsumingPage = (): JSX.Element => {
  return (
    <>
      <ConsumingTypeList types={config.items} />
    </>
  );
};

export default ConsumingPage;
