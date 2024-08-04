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
exports.TicketService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const ticket_model_1 = require("./ticket.model");
const getAllTickets = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ticket_model_1.Ticket.find();
    return result;
});
const createTicket = (ticket) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield ticket_model_1.Ticket.create(ticket);
    if (!createUser) {
        throw new ApiError_1.default(400, 'Failed to create Ticket');
    }
    return createUser;
});
const getSingleTicket = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ticket_model_1.Ticket.findById(id);
    return result;
});
const deleteTicket = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ticket_model_1.Ticket.findByIdAndDelete(id);
    return result;
});
const updateTicket = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ticket_model_1.Ticket.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.TicketService = {
    createTicket,
    getAllTickets,
    getSingleTicket,
    deleteTicket,
    updateTicket,
};
