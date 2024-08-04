import {  Schema, model } from 'mongoose'
import { IStation } from './station.interface'

const stationSchema = new Schema<IStation>({
  name: { type: String, required: true },
  code: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },

})

export const Station = model<IStation>('Station', stationSchema)
