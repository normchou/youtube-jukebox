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
  return database.ref('/playlists/norm').once('value')
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

const updatePlaylist = (name, video) => {
  return new Promise((resolve, reject) => {
    database.ref(`/playlists/${name}`)
      .once('value')
      .then((playlist) => {
        let songs = playlist.val().songs || []
        const { videoId, title, description, channel, img } = video

        songs.push(songsModel(
          videoId, title, description, channel, img, firebase.database.ServerValue.TIMESTAMP
        ))

        database.ref(`/playlists/${name}/songs`).set(songs)
          .then(res => resolve(songs))
          .catch(err => reject(err))
      })
  })
}

module.exports = {
  init,
  getPlaylistDB,
  getSongsDB,
  addPlaylist,
  updatePlaylist
}
