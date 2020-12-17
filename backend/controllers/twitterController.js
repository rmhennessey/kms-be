// using this twitter package => https://www.npmjs.com/package/twitter
import Twitter from 'twitter'

const getKirkTimeline = (req, res) => {
	const client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	})
	// see timeline docs => https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline
	const params = { screen_name: 'kirkmin', count: 30, trim_user: true }
	client.get(
		'statuses/user_timeline',
		params,
		function (error, tweets, response) {
			if (!error) {
				return res.json(tweets)
			} else {
				throw error
			}
		}
	)
}

const getSteveTimeline = (req, res) => {
	const client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	})
	const params = { screen_name: 'bigsteve207', count: 30, trim_user: true }
	client.get(
		'statuses/user_timeline',
		params,
		function (error, tweets, response) {
			if (!error) {
				return res.json(tweets)
			} else {
				throw error
			}
		}
	)
}

const getKmsTimeline = (req, res) => {
	const client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	})
	const params = {
		screen_name: 'kirkminshow',
		count: 30,
		trim_user: true,
		include_rts: true,
	}
	client.get(
		'statuses/user_timeline',
		params,
		function (error, tweets, response) {
			if (!error) {
				return res.json(tweets)
			} else {
				throw error
			}
		}
	)
}

export { getKirkTimeline, getSteveTimeline, getKmsTimeline }
