import { useEffect, useState } from "react";

import { SelectOption } from "components/Select/Select";
import { useRootStore } from "providers/RootStoreProvider";
import AddFly from "./AddFly";

const AddFlyContainer = (): JSX.Element => {
  const { airportStore } = useRootStore();
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return <AddFly airports={airports} onAdd={() => {}} />;
};

export default AddFlyContainer;
