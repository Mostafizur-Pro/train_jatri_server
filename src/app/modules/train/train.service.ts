import ApiError from '../../../errors/ApiError'
import {  IStation } from './train.interface'
import { Station } from './train.model'

const getAllStations = async (): Promise<IStation[] | null> => {
  const result = await Station.find()
  return result
}

const createStation = async (station: IStation): Promise<IStation | null> => {
  const createUser = await Station.create(station)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create Station')
  }

  return createUser
}
const getSingleStation = async (id: string): Promise<IStation | null> => {
  const result = await Station.findById(id)
  return result
}

const deleteStation = async (id: string): Promise<IStation | null> => {
  const result = await Station.findByIdAndDelete(id)
  return result
}
const updateStation = async (
  id: string,
  payload: Partial<IStation>
): Promise<IStation | null> => {
  const result = await Station.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const StationService = {
  createStation,
  getAllStations,
  getSingleStation,
  deleteStation,
  updateStation,
}
