const express = require('express')
const router = express.Router()
const searchYouTube = require('../youtubeUtils/searchUtil')
const transformSongList = require('../youtubeUtils/transformSongListUtil')

router.post('/', (request, response, next) => {
  searchYouTube(request.body.search)
    .then(res => {
      const result = transformSongList(res.items)
      response.json(result)
    })
    .catch(err => {
      console.log('error is', err)
    })
})

module.exports = router
