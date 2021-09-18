import { Subject } from "rxjs";

export interface Airport {
  name: string;
  city: string;
  country: string;
  IATA: string;
  lat: number;
  lon: number;
  passengers: number;
}

export const airportsSubject = new Subject<number>();
