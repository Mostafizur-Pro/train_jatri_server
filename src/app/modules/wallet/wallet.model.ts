import { Schema, model } from 'mongoose'
import { IWallet } from './wallet.interface'
// import mongoose from 'mongoose';

const walletSchema = new Schema<IWallet>({
  user: {
    type: String,
    ref: 'User',
    required: true
  },
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  transactions: [
    {
      amount: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        required: true,
        default: Date.now
      },
      type: {
        type: String,
        required: true,
        enum: ['credit', 'debit']
      },
      description: {
        type: String
      }
    }
  ],

})

export const Wallet = model<IWallet>('Wallet', walletSchema)
