"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wallet_controller_1 = require("./wallet.controller");
const router = express_1.default.Router();
router.post('/create-wallet', wallet_controller_1.WalletController.createWallet);
router.get('/', wallet_controller_1.WalletController.getAllWallets);
router.get('/id/:id', wallet_controller_1.WalletController.getSingleWallet);
router.delete('/delete/:id', wallet_controller_1.WalletController.deleteWallet);
router.patch('/update/:id', wallet_controller_1.WalletController.updateWallet);
exports.default = router;
