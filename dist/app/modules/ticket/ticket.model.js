"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const mongoose_1 = require("mongoose");
// import mongoose from 'mongoose';
const ticketSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Express', 'Local', 'Superfast']
    },
    capacity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Running', 'Delayed', 'Cancelled']
    },
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
});
exports.Ticket = (0, mongoose_1.model)('Ticket', ticketSchema);
