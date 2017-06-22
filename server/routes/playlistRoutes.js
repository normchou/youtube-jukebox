const express = require('express')
const router = express.Router()
const firebase = require('../database/firebase')

router.post('/create', (request, response, next) => {
  firebase.createPlaylist(request.body.name, request.body.video)
    .then(res => response.json({ "playlistName": res }))
    .catch(err => response.json({ "error": "duplicate entry"}))
})

router.post('/update', (request, response, next) => {
  firebase.updatePlaylist(request.body.name, request.body.video)
    .then(res => response.json({ "songs": res }))
    .catch(err => response.json({ "error": "unable to save song" }))
})

router.post('/', (request, response, next) => {
  firebase.getPlaylist(request.body.name)
    .then(res => {
      response.json({ "playlist": res })
    })
    .catch(err => {
      response.json(err)
    })
})

module.exports = router
