import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { ITrain } from './train.interface'
import {  TrainService } from './train.service'

const createTrain: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...train } = req.body

    console.log('data', train)
    const result = await TrainService.createTrain(train)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Train Placed successfully',
      data: result,
    })
  }
)

const getAllTrains = catchAsync(async (req: Request, res: Response) => {
  const result = await TrainService.getAllTrains()

  sendResponse<ITrain[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Train retrieved successfully !',
    data: result,
  })
})

const getSingleTrain = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await TrainService.getSingleTrain(id)

  sendResponse<ITrain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully !',
    data: result,
  })
})
const deleteTrain = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await TrainService.deleteTrain(id)

  sendResponse<ITrain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Train deleted successfully !',
    data: result,
  })
})
const updateTrain = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  console.log('data', id, updatedData)
  const result = await TrainService.updateTrain(id, updatedData)

  sendResponse<ITrain>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Train updated successfully !',
    data: result,
  })
})
export const TrainController = {
  createTrain,
  getAllTrains,
  getSingleTrain,
  deleteTrain,
  updateTrain,
}
