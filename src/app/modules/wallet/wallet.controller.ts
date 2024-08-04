import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IWallet } from './wallet.interface'
import { WalletService } from './wallet.service'

const createWallet: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...wallet } = req.body

    console.log('data', wallet)
    const result = await WalletService.createWallet(wallet)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wallet Placed successfully',
      data: result,
    })
  }
)

const getAllWallets = catchAsync(async (req: Request, res: Response) => {
  const result = await WalletService.getAllWallets()

  sendResponse<IWallet[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet retrieved successfully !',
    data: result,
  })
})

const getSingleWallet = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await WalletService.getSingleWallet(id)

  sendResponse<IWallet>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet retrieved successfully !',
    data: result,
  })
})
const deleteWallet = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await WalletService.deleteWallet(id)

  sendResponse<IWallet>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet deleted successfully !',
    data: result,
  })
})
const updateWallet = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  console.log('data', id, updatedData)
  const result = await WalletService.updateWallet(id, updatedData)

  sendResponse<IWallet>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet updated successfully !',
    data: result,
  })
})
export const WalletController = {
  createWallet,
  getAllWallets,
  getSingleWallet,
  deleteWallet,
  updateWallet,
}
