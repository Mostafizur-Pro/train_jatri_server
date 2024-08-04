"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
const mongoose_1 = require("mongoose");
const trainSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    type: { type: String, required: true, enum: ['Express', 'Local', 'Superfast'] },
    capacity: { type: String, required: true },
    status: { type: String, required: true, enum: ['Running', 'Delayed', 'Cancelled'] },
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
exports.Train = (0, mongoose_1.model)('Train', trainSchema);
