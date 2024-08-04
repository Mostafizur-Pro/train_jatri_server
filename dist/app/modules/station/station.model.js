"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Station = void 0;
const mongoose_1 = require("mongoose");
const stationSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    location: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
});
exports.Station = (0, mongoose_1.model)('Station', stationSchema);
