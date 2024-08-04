export type ITicket = {
  name: string;
  number: string;
  type: 'Express' | 'Local' | 'Superfast';
  capacity: number;
  status: 'Running' | 'Delayed' | 'Cancelled';

  stops: {
    station: string; 
    arrivalTime: Date;
    departureTime: Date;
  }[];
};
