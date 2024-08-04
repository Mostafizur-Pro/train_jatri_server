"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const mongoose_1 = require("mongoose");
// import mongoose from 'mongoose';
const walletSchema = new mongoose_1.Schema({
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
});
exports.Wallet = (0, mongoose_1.model)('Wallet', walletSchema);
