import express from 'express'
import { TrainController } from './train.controller'
const router = express.Router()

router.post('/create-train', TrainController.createTrain)
router.get('/', TrainController.getAllTrains)
router.get('/id/:id', TrainController.getSingleTrain)
router.delete('/delete/:id', TrainController.deleteTrain)
router.patch('/update/:id', TrainController.updateTrain)

export default router
