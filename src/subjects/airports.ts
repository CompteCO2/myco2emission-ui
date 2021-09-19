import { BehaviorSubject } from "rxjs";
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

export const airports$ = new BehaviorSubject<Airport[]>(airports);
