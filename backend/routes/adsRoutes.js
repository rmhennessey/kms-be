import express from 'express'
const router = express.Router()
import { getAds } from '../controllers/adsController.js'

router.route('/').get(getAds)

export default router
