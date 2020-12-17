import tees from '../data/tees.js'

const getTees = async (req, res) => {
	try {
		return res.json(tees)
	} catch (error) {
		console.error('Not getting [TEES] API')
	}
}

export { getTees }
