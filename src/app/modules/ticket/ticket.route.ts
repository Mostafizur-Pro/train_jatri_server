import express from 'express'
import { TicketController } from './ticket.controller'
const router = express.Router()

router.post('/create-ticket', TicketController.createTicket)
router.get('/', TicketController.getAllTickets)
router.get('/id/:id', TicketController.getSingleTicket)
router.delete('/delete/:id', TicketController.deleteTicket)
router.patch('/update/:id', TicketController.updateTicket)

export default router
