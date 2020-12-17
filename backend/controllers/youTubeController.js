import axios from 'axios'

const getYouTubeChannel = async (req, res) => {
	try {
		const config = {
			headers: {
				Authorization: process.env.ACCESS_TOKEN,
			},
		}

		const { data } = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC67O17pRkITrJDkSgWmdkdQ&maxResults=50&key=${process.env.API_KEY}`,
			config
		)

		return res.json(data)
	} catch (error) {
		console.error('Not getting YouTube Network API')
	}
}

const getPlaylistById = async (req, res) => {
	try {
		const config = {
			headers: {
				Authorization: process.env.ACCESS_TOKEN,
			},
		}

		const { data } = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${req.params.id}&key=${process.env.API_KEY}`,
			config
		)

		return res.json(data)
	} catch (error) {
		console.error('Not getting YouTube Playlist API')
	}
}

const getVideoById = async (req, res) => {
	try {
		const config = {
			headers: {
				Authorization: process.env.ACCESS_TOKEN,
			},
		}

		const { data } = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cplayer&id=${req.params.id}&key=${process.env.API_KEY}`,
			config
		)

		return res.json(data)
	} catch (error) {
		console.error('Not getting YouTube Video API')
	}
}

const getWrapUpVideos = async (req, res) => {
	try {
		const config = {
			headers: {
				Authorization: process.env.ACCESS_TOKEN,
			},
		}

		const { data } = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU67O17pRkITrJDkSgWmdkdQ&key=${process.env.API_KEY}`,
			config
		)

		return res.json(data)
	} catch (error) {
		console.error('Not getting [WRAP-UP] Video API')
	}
}

export { getYouTubeChannel, getPlaylistById, getVideoById, getWrapUpVideos }
