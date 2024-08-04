import {  Schema, model } from 'mongoose'
import { ITrain } from './train.interface'

const trainSchema = new Schema<ITrain>({
  name: { type: String, required: true },
  number: { type: String, required: true },
  type: { type: String, required: true, enum: ['Express', 'Local', 'Superfast'] },
  capacity: { type: String, required: true },
  status: { type: String, required: true, enum: ['Running', 'Delayed', 'Cancelled'] },
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

})

export const Train = model<ITrain>('Train', trainSchema)
