import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { ITicket } from './ticket.interface'
import { TicketService } from './ticket.service'

const createTicket: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...ticket } = req.body

    console.log('data', ticket)
    const result = await TicketService.createTicket(ticket)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Ticket Placed successfully',
      data: result,
    })
  }
)

const getAllTickets = catchAsync(async (req: Request, res: Response) => {
  const result = await TicketService.getAllTickets()

  sendResponse<ITicket[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket retrieved successfully !',
    data: result,
  })
})

const getSingleTicket = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await TicketService.getSingleTicket(id)

  sendResponse<ITicket>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket retrieved successfully !',
    data: result,
  })
})
const deleteTicket = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await TicketService.deleteTicket(id)

  sendResponse<ITicket>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket deleted successfully !',
    data: result,
  })
})
const updateTicket = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body

  console.log('data', id, updatedData)
  const result = await TicketService.updateTicket(id, updatedData)

  sendResponse<ITicket>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Ticket updated successfully !',
    data: result,
  })
})
export const TicketController = {
  createTicket,
  getAllTickets,
  getSingleTicket,
  deleteTicket,
  updateTicket,
}
