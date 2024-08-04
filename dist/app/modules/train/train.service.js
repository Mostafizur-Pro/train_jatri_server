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
exports.TrainService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const train_model_1 = require("./train.model");
const getAllTrains = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield train_model_1.Train.find();
    return result;
});
const createTrain = (train) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield train_model_1.Train.create(train);
    if (!createUser) {
        throw new ApiError_1.default(400, 'Failed to create Train');
    }
    return createUser;
});
const getSingleTrain = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield train_model_1.Train.findById(id);
    return result;
});
const deleteTrain = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield train_model_1.Train.findByIdAndDelete(id);
    return result;
});
const updateTrain = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield train_model_1.Train.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.TrainService = {
    createTrain,
    getAllTrains,
    getSingleTrain,
    deleteTrain,
    updateTrain,
};
