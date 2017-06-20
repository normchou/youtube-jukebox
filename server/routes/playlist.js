const express = require('express')
const app = express()
const router = express.Router()

router.use('/', (req, res, next) => {
  res.json({"message" : "Playlist API success message"})
})

module.exports = router
