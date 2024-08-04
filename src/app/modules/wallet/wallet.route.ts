import express from 'express'
import { WalletController } from './wallet.controller'
const router = express.Router()

router.post('/create-wallet', WalletController.createWallet)
router.get('/', WalletController.getAllWallets)
router.get('/id/:id', WalletController.getSingleWallet)
router.delete('/delete/:id', WalletController.deleteWallet)
router.patch('/update/:id', WalletController.updateWallet)

export default router
