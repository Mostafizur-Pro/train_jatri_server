"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ticket_controller_1 = require("./ticket.controller");
const router = express_1.default.Router();
router.post('/create-ticket', ticket_controller_1.TicketController.createTicket);
router.get('/', ticket_controller_1.TicketController.getAllTickets);
router.get('/id/:id', ticket_controller_1.TicketController.getSingleTicket);
router.delete('/delete/:id', ticket_controller_1.TicketController.deleteTicket);
router.patch('/update/:id', ticket_controller_1.TicketController.updateTicket);
exports.default = router;
