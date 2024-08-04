"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const train_controller_1 = require("./train.controller");
const router = express_1.default.Router();
router.post('/create-train', train_controller_1.TrainController.createTrain);
router.get('/', train_controller_1.TrainController.getAllTrains);
router.get('/id/:id', train_controller_1.TrainController.getSingleTrain);
router.delete('/delete/:id', train_controller_1.TrainController.deleteTrain);
router.patch('/update/:id', train_controller_1.TrainController.updateTrain);
exports.default = router;
