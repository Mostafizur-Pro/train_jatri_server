import express from 'express'
import loginRoute from '../modules/auth/auth.route'
import jobRoute from '../modules/station/station.route'
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
    route: jobRoute,
  },
  // {
  //   path: '/orders',
  //   route: OrderRoute,
  // },
  // {
  //   path: '/admin',
  //   route: adminRoute,
  // },
  // {
  //   path: '/admins',
  //   route: loginRoute,
  // },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
