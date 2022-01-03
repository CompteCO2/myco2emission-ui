import { observer } from "mobx-react";

import { useRootStore } from "providers/RootStoreProvider";
import { useEffect, useState } from "react";
import { FliesList, FlyWithFullAirportsName } from "./FliesList";

export const FliesListContainer = observer((): JSX.Element => {
  const { flyStore, airportStore } = useRootStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [flies, setFlies] = useState<FlyWithFullAirportsName[]>([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(airportStore.airports);
  }, [flyStore.flies, airportStore.airports]);

  return <FliesList flies={flies} />;
});
