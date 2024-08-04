"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const station_controller_1 = require("./station.controller");
const router = express_1.default.Router();
router.post('/create-station', station_controller_1.StationController.createStation);
router.get('/', station_controller_1.StationController.getAllStations);
router.get('/id/:id', station_controller_1.StationController.getSingleStation);
router.delete('/delete/:id', station_controller_1.StationController.deleteStation);
router.patch('/update/:id', station_controller_1.StationController.updateStation);
exports.default = router;
