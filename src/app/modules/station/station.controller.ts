import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IStation } from './station.interface'
import {  StationService } from './station.service'

const createStation: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...station } = req.body

    console.log('data', station)
    const result = await StationService.createStation(station)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Station Placed successfully',
      data: result,
    })
  }
)

const getAllStations = catchAsync(async (req: Request, res: Response) => {
  const result = await StationService.getAllStations()

  sendResponse<IStation[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Station retrieved successfully !',
    data: result,
  })
})
const deleteStation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await StationService.deleteStation(id)

  sendResponse<IStation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Station deleted successfully !',
    data: result,
  })
})
const updateStation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  console.log('data', id, updatedData)
  const result = await StationService.updateStation(id, updatedData)

  sendResponse<IStation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Station updated successfully !',
    data: result,
  })
})
export const StationController = {
  createStation,
  getAllStations,
  deleteStation,
  updateStation,
}
