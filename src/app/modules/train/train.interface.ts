export type ITrain = {
  name: string;
  number: string;
  type: 'Express' | 'Local' | 'Superfast';
  capacity: string;
  status: 'Running' | 'Delayed' | 'Cancelled';

  stops: {
    station: string;
    arrivalTime: Date;
    departureTime: Date;
  }[];
};
