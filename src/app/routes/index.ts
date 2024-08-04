import express from 'express'
import loginRoute from '../modules/auth/auth.route'
import stationRoute from '../modules/station/station.route'
import trainsRoute from '../modules/train/train.route'
import walletsRoute from '../modules/wallet/wallet.route'
import ticketsRoute from '../modules/ticket/ticket.route'
import userRoute from '../modules/user/user.route'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: loginRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/stations',
    route: stationRoute,
  },
  {
    path: '/trains',
    route: trainsRoute,
  },
  {
    path: '/wallets',
    route: walletsRoute,
  },
  {
    path: '/tickets',
    route: ticketsRoute,
  },

]
moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
