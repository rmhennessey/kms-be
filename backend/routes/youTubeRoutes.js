import express from 'express'
const router = express.Router()
import {
	getYouTubeChannel,
	getPlaylistById,
	getVideoById,
	getWrapUpVideos,
} from '../controllers/youTubeController.js'

router.route('/').get(getYouTubeChannel)
router.route('/wrap-up').get(getWrapUpVideos)
router.route('/playlist/:id').get(getPlaylistById)
router.route('/video/:id').get(getVideoById)

export default router
