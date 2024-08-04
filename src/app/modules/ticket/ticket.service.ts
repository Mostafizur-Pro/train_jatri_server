import ApiError from '../../../errors/ApiError'
import {  ITicket } from './ticket.interface'
import {  Ticket } from './ticket.model'

const getAllTickets = async (): Promise<ITicket[] | null> => {
  const result = await Ticket.find()
  return result
}

const createTicket = async (ticket: ITicket): Promise<ITicket | null> => {
  const createUser = await Ticket.create(ticket)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create Ticket')
  }

  return createUser
}
const getSingleTicket = async (id: string): Promise<ITicket | null> => {
  const result = await Ticket.findById(id)
  return result
}

const deleteTicket = async (id: string): Promise<ITicket | null> => {
  const result = await Ticket.findByIdAndDelete(id)
  return result
}
const updateTicket = async (
  id: string,
  payload: Partial<ITicket>
): Promise<ITicket | null> => {
  const result = await Ticket.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const TicketService = {
  createTicket,
  getAllTickets,
  getSingleTicket,
  deleteTicket,
  updateTicket,
}
