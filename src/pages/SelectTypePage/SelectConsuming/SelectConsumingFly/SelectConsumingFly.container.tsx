import { SelectOption } from "components/Select/Select";
import { useRootStore } from "providers/RootStoreProvider";
import { useCallback, useEffect, useState } from "react";
import { Fly } from "stores/consumptions/fly";
import { FlyWithFullAirportsName } from "./FliesList/FliesList";
import SelectConsumingFly from "./SelectConsumingFly";

const SelectConsumingFlyContainer = (): JSX.Element => {
  const { flyConsumption, airportStore } = useRootStore();

  const [airports, setAirports] = useState<SelectOption[]>([]);
  const [flies, setFlies] = useState<FlyWithFullAirportsName[]>([]);

  const onDelete = useCallback(
    (index: number) => {
      flyConsumption.deleteByIndex(index);
    },
    [flyConsumption]
  );

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

  return (
    <SelectConsumingFly
      flies={flies}
      onDeleteItem={onDelete}
      onCheckout={function (): void {
        throw new Error("Function not implemented.");
      }}
      airports={airports}
      onAdd={onAddCallback}
    />
  );
};

export default SelectConsumingFlyContainer;
