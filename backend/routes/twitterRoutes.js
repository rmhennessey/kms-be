import express from 'express'
const router = express.Router()
import {
	getKirkTimeline,
	getSteveTimeline,
	getKmsTimeline,
} from '../controllers/twitterController.js'

router.route('/kirk').get(getKirkTimeline)
router.route('/steve').get(getSteveTimeline)
router.route('/kms').get(getKmsTimeline)

export default router
