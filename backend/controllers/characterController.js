import a_to_f from '../data/characters/a_to_f.js'
import g_to_l from '../data/characters/g_to_l.js'
import m_to_s from '../data/characters/m_to_s.js'
import t_to_z from '../data/characters/t_to_z.js'

const getAtoF = async (req, res) => {
	try {
		return res.json(a_to_f)
	} catch (error) {
		console.error('Not getting [A-F Characters] API')
	}
}

const getGtoL = async (req, res) => {
	try {
		return res.json(g_to_l)
	} catch (error) {
		console.error('Not getting [G-L Characters] API')
	}
}

const getMtoS = async (req, res) => {
	try {
		return res.json(m_to_s)
	} catch (error) {
		console.error('Not getting [M-S Characters] API')
	}
}

const getTtoZ = async (req, res) => {
	try {
		return res.json(t_to_z)
	} catch (error) {
		console.error('Not getting [T-Z Characters] API')
	}
}

export { getAtoF, getGtoL, getMtoS, getTtoZ }
