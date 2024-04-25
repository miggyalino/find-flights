export type Airport = {
  icao: string;
  iata: string;
  name: string;
  city: string;
  region: string;
  country: string;
  elevation_ft: string;
  latitude: string;
  longitude: string;
  timezone: string;
};

export interface Flights {
  id: string;
  flightType: string;
  origin: string;
  destination: string;
  departureDate: String;
  returnDate?: String;
  departureTime: string;
  returnTime?: string;
  age: number;
}
