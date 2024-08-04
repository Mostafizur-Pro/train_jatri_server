import ApiError from '../../../errors/ApiError'
import {  ITrain } from './train.interface'
import {  Train } from './train.model'

const getAllTrains = async (): Promise<ITrain[] | null> => {
  const result = await Train.find()
  return result
}

const createTrain = async (train: ITrain): Promise<ITrain | null> => {
  const createUser = await Train.create(train)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create Train')
  }

  return createUser
}
const getSingleTrain = async (id: string): Promise<ITrain | null> => {
  const result = await Train.findById(id)
  return result
}

const deleteTrain = async (id: string): Promise<ITrain | null> => {
  const result = await Train.findByIdAndDelete(id)
  return result
}
const updateTrain = async (
  id: string,
  payload: Partial<ITrain>
): Promise<ITrain | null> => {
  const result = await Train.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const TrainService = {
  createTrain,
  getAllTrains,
  getSingleTrain,
  deleteTrain,
  updateTrain,
}
