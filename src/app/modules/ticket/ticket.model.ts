import { Schema, model } from 'mongoose'
import { ITicket } from './ticket.interface'
// import mongoose from 'mongoose';

const ticketSchema = new Schema<ITicket>({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Express', 'Local', 'Superfast']
  },
  capacity: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Running', 'Delayed', 'Cancelled']
  },
  stops: [
    {
      station: {
        type: String,
        ref: 'Station',
        required: true
      },
      arrivalTime: {
        type: Date,
        required: true
      },
      departureTime: {
        type: Date,
        required: true
      }
    }
  ]
});

export const Ticket = model<ITicket>('Ticket', ticketSchema)
