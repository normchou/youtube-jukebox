const express = require('express')
const playlistApi = require('./playlist')
const app = express()
const router = express.Router()

router.use('/v1/playlist', playlistApi)

module.exports = router
