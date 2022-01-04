import { observer } from "mobx-react";
import { useEffect, useState } from "react";

import { useRootStore } from "providers/RootStoreProvider";
import { FliesList, FlyWithFullAirportsName } from "./FliesList";

export const FliesListContainer = observer((): JSX.Element => {
  const { flyStore, airportStore } = useRootStore();
  const [flies, setFlies] = useState<FlyWithFullAirportsName[]>([]);

  useEffect(() => {
    const airports = airportStore.getAiportsDictByIATA();
    const flies: FlyWithFullAirportsName[] = flyStore.flies.map(fly => {
      return {
        ...fly,
        destinationName: airports[fly.destination].city,
        arrivalName: airports[fly.arrival].city,
      };
    });

    setFlies(flies);
  }, [flyStore.flies, airportStore.airports]);

  return <FliesList flies={flies} />;
});
