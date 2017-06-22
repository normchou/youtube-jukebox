const express = require('express')
const router = express.Router()
const firebase = require('../database/firebase')

router.get('/', (req, res, next) => {
  res.json({"message" : "Hi Melissa"})
})

router.post('/create', (request, response, next) => {
  firebase.addPlaylist(request.body.name, request.body.video)
    .then(res => response.json({ "playlistName": res }))
    .catch(err => response.json({ "error": "duplicate entry"}))
})

router.post('/update', (request, response, next) => {
  firebase.updatePlaylist(request.body.name, request.body.video)
    .then(res => response.json({ "songs": res }))
    .catch(err => response.json({ "error": "unable to save song" }))
})

module.exports = router
