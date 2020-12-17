import ads from '../data/ads.js'

const getAds = async (req, res) => {
	try {
		return res.json(ads)
	} catch (error) {
		console.error('Not getting [ADs] API')
	}
}

export { getAds }
