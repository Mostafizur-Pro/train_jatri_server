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
exports.WalletService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const wallet_model_1 = require("./wallet.model");
const getAllWallets = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wallet_model_1.Wallet.find();
    return result;
});
const createWallet = (wallet) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield wallet_model_1.Wallet.create(wallet);
    if (!createUser) {
        throw new ApiError_1.default(400, 'Failed to create Wallet');
    }
    return createUser;
});
const getSingleWallet = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wallet_model_1.Wallet.findById(id);
    return result;
});
const deleteWallet = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wallet_model_1.Wallet.findByIdAndDelete(id);
    return result;
});
const updateWallet = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wallet_model_1.Wallet.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.WalletService = {
    createWallet,
    getAllWallets,
    getSingleWallet,
    deleteWallet,
    updateWallet,
};
