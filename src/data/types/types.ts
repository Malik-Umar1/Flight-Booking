export type TFlight = {
    id: string;
    airline: string;
    flightNumber: string;
    departure: TArrivalDepartureData;
    arrival: TArrivalDepartureData;
    duration: string;
    stops: TStops[];
    price: TPriceData;
    seatsAvailable: number;
  };
  type TStops = {
layover : string;
name: string;
  }
  type TArrivalDepartureData = {
    airport: string;
    code: string;
    city: string;
    country: string;
    time: string;
  };
  
  type TPriceData = {
    amount: string;
    currency: string;
  };
  