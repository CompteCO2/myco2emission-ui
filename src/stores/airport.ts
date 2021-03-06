import { makeAutoObservable } from "mobx";
import airports from "config/airports.json";

export interface Airport {
  name: string;
  city: string;
  country: string;
  IATA: string;
  lat: number;
  lon: number;
  passengers: number;
}

export class AirportStore {
  public airports: Airport[] = airports;

  constructor() {
    makeAutoObservable(this);
  }

  public getAiportsDictByIATA(): Record<string, Airport> {
    return this.airports.reduce<Record<string, Airport>>((acc, value) => {
      acc[value.IATA] = value;

      return acc;
    }, {});
  }
}
