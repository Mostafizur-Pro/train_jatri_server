import ApiError from '../../../errors/ApiError'
import {  IWallet } from './wallet.interface'
import {  Wallet } from './wallet.model'

const getAllWallets = async (): Promise<IWallet[] | null> => {
  const result = await Wallet.find()
  return result
}

const createWallet = async (wallet: IWallet): Promise<IWallet | null> => {
  const createUser = await Wallet.create(wallet)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create Wallet')
  }

  return createUser
}
const getSingleWallet = async (id: string): Promise<IWallet | null> => {
  const result = await Wallet.findById(id)
  return result
}

const deleteWallet = async (id: string): Promise<IWallet | null> => {
  const result = await Wallet.findByIdAndDelete(id)
  return result
}
const updateWallet = async (
  id: string,
  payload: Partial<IWallet>
): Promise<IWallet | null> => {
  const result = await Wallet.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const WalletService = {
  createWallet,
  getAllWallets,
  getSingleWallet,
  deleteWallet,
  updateWallet,
}
