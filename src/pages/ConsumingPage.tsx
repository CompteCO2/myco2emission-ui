import ConsumingTypeList from "components/ConsumingTypeList/ConsumingTypeList";
import config from "config/consuming_types.json";

const ConsumingPage = (): JSX.Element => {
  return (
    <>
      <h2>Je calcule mon empreinte carbone</h2>
      <p>Cliquer sur une icône pour commencer le calcul.</p>
      <p>0 kgCO2</p>
      <ConsumingTypeList types={config.items} />
    </>
  );
};

export default ConsumingPage;
