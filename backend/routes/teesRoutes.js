import express from 'express'
const router = express.Router()
import { getTees } from '../controllers/teesControllers.js'

router.route('/').get(getTees)

export default router
