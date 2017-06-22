const express = require('express')
const playlistApi = require('./playlistRoutes')
const app = express()
const router = express.Router()

router.use('/v1/playlist', playlistApi)

module.exports = router
