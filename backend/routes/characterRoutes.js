import express from 'express'
const router = express.Router()
import {
	getAtoF,
	getGtoL,
	getMtoS,
	getTtoZ,
} from '../controllers/characterController.js'

router.route('/a-f').get(getAtoF)
router.route('/g-l').get(getGtoL)
router.route('/m-s').get(getMtoS)
router.route('/t-z').get(getTtoZ)

export default router
