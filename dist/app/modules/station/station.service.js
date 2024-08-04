"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const station_model_1 = require("./station.model");
const getAllStations = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield station_model_1.Station.find();
    return result;
});
const createStation = (station) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield station_model_1.Station.create(station);
    if (!createUser) {
        throw new ApiError_1.default(400, 'Failed to create Station');
    }
    return createUser;
});
const getSingleStation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield station_model_1.Station.findById(id);
    return result;
});
const deleteStation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield station_model_1.Station.findByIdAndDelete(id);
    return result;
});
const updateStation = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield station_model_1.Station.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.StationService = {
    createStation,
    getAllStations,
    getSingleStation,
    deleteStation,
    updateStation,
};
