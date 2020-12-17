import path from 'path'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import characterRoutes from './routes/characterRoutes.js'
import teesRoutes from './routes/teesRoutes.js'
import adsRoutes from './routes/adsRoutes.js'
import youTubeRoutes from './routes/youTubeRoutes.js'
import twitterRoutes from './routes/twitterRoutes.js'

dotenv.config()

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(express.json())

app.use(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json')
	next()
})

app.use('/api/characters', characterRoutes)
app.use('/api/shop', teesRoutes)
app.use('/api/ads', adsRoutes)
app.use('/api/youtube', youTubeRoutes)
app.use('/api/twitter', twitterRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	)
} else {
	app.get('/', (req, res) => {
		res.send('Welcome to the jungle...')
	})
}

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Welcome to the [${process.env.NODE_ENV}] Jungle on port ${PORT}`.yellow
			.bold
	)
)
