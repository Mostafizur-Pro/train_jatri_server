import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
const router = express.Router()

router.post(
  '/signup',
  // validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
)
router.get('/', UserController.getAllUsers)

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
)

router.get('/email/:email', UserController.getUserByEmail)
router.get('/:id', UserController.getSingleUser)
router.delete('/:id', UserController.deleteUser)

export default router

//everything is okay
