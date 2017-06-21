const express = require('express')
const router = express.Router()
const searchYouTube = require('../youtubeUtils/searchUtil')
const transformSongList = require('../youtubeUtils/transformSongListUtil')

router.post('/:search', (request, response, next) => {
  searchYouTube(request.params.search)
    .then(res => {
      const result = transformSongList(res.items)
      response.json(result)
    })
    .catch(err => {
      console.log('error is', err)
    })
})

module.exports = router
