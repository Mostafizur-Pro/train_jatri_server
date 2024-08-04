import express from 'express'
import { StationController } from './station.controller'
const router = express.Router()

router.post('/create-station', StationController.createStation)
router.get('/', StationController.getAllStations)
router.delete('/delete/:id', StationController.deleteStation)
router.patch('/update/:id', StationController.updateStation)

export default router
