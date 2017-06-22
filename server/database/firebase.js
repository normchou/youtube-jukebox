const firebase = require('firebase')
const firebaseConfig = require('./config.js')
const playlistModel = require('./models/playlistModel')
const songsModel = require('./models/songsModel')

let database

const init = () => {
  firebase.initializeApp(firebaseConfig)
  database = firebase.database()

  console.log('==> 🔥 Firebase initialized')
}

const getPlaylistDB = () => {
  return database.ref('/').once('value')
}

const getSongsDB = (playlistId) => {
  return database.ref(`/${playlistId}`).once('value')
}

const addPlaylist = (name) => {
  let model = playlistModel(
    name,
    firebase.database.ServerValue.TIMESTAMP
  )

  return new Promise((resolve, reject) => {
    database.ref(`/playlists/${name}`).set(model, (err) => {
      if (err) reject(err)

      resolve(name)
    })
  })
}

module.exports = {
  init,
  getPlaylistDB,
  getSongsDB,
  addPlaylist
}
