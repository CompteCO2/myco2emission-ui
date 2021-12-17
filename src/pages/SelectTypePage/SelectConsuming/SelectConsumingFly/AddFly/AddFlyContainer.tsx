import { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { SelectOption } from "components/Select/Select";
import { useRootStore } from "providers/RootStoreProvider";
import AddFly from "./AddFly";
import { Fly } from "stores/fly";

const AddFlyContainer = observer((): JSX.Element => {
  const { airportStore, flyStore } = useRootStore();
  const [airports, setAirports] = useState<SelectOption[]>([]);

  // map airports to options.
  useEffect(() => {
    setAirports(
      airportStore.airports.map(airport => {
        return {
          title: `${airport.name} ${airport.IATA}`,
          value: airport.IATA,
        };
      })
    );
  }, []);

  // add fly.
  const onAddCallback = (data: Fly) => {
    flyStore.addFly(data);
  };

  return <AddFly airports={airports} onAdd={onAddCallback} />;
});

export default AddFlyContainer;
