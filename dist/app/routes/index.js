"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("../modules/auth/auth.route"));
const station_route_1 = __importDefault(require("../modules/station/station.route"));
const train_route_1 = __importDefault(require("../modules/train/train.route"));
const wallet_route_1 = __importDefault(require("../modules/wallet/wallet.route"));
const ticket_route_1 = __importDefault(require("../modules/ticket/ticket.route"));
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.default,
    },
    {
        path: '/users',
        route: user_route_1.default,
    },
    {
        path: '/stations',
        route: station_route_1.default,
    },
    {
        path: '/trains',
        route: train_route_1.default,
    },
    {
        path: '/wallets',
        route: wallet_route_1.default,
    },
    {
        path: '/tickets',
        route: ticket_route_1.default,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
