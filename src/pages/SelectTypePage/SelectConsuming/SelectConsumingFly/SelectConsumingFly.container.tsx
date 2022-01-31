import { SelectOption } from "components/Select/Select";
import { observer } from "mobx-react";
import { useRootStore } from "providers/RootStoreProvider";
import { useCallback, useEffect, useState } from "react";
import { CARBON_FOOTPRINT_MODULES } from "stores/carbonFootprint";
import { Fly } from "stores/consumptions/fly";
import { FlyWithFullAirportsName } from "./FliesList/FliesList";
import SelectConsumingFly from "./SelectConsumingFly";

const SelectConsumingFlyContainer = observer((): JSX.Element => {
  const { flyConsumption, airportStore, carbonFootprintStore } = useRootStore();

  const [airports, setAirports] = useState<SelectOption[]>([]);
  const [flies, setFlies] = useState<FlyWithFullAirportsName[]>([]);

  // on delete a fly.
  const onDelete = useCallback(
    (index: number) => {
      flyConsumption.deleteByIndex(index);
    },
    [flyConsumption]
  );

  // create a list of flies.
  useEffect(() => {
    const airports = airportStore.getAiportsDictByIATA();
    const flies: FlyWithFullAirportsName[] = flyConsumption.flies.map(fly => {
      return {
        ...fly,
        destinationName: airports[fly.destination].city,
        arrivalName: airports[fly.arrival].city,
      };
    });

    setFlies(flies);
  }, [flyConsumption.flies, airportStore.airports]);

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
    flyConsumption.addFly(data);
  };

  // on checkout flies.
  const onCheckout = useCallback(() => {
    carbonFootprintStore.calculate(CARBON_FOOTPRINT_MODULES.FLY, {
      flies: [...flies],
    });
  }, [flies]);

  return (
    <SelectConsumingFly
      flies={flies}
      onDeleteItem={onDelete}
      onCheckout={onCheckout}
      airports={airports}
      onAdd={onAddCallback}
    />
  );
});

export default SelectConsumingFlyContainer;
