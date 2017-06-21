const google = require('googleapis')
const fs = require('fs')
const authorize = require('./authUtil')
const clientSecret = require('./clientSecret.js')

const search = (auth, searchTerm) => {
  let service = google.youtube('v3')
  return new Promise((resolve, reject) => {
    service.search.list({
      auth: auth,
      part: 'snippet',
      maxResults: '10',
      q: searchTerm,
      type: 'video'
    }, (error, response) => {
      if (error) reject(error)

      resolve(response)
    })
  })
}

const searchYouTube = (searchTerm) => {
  return new Promise((resolve, reject) => {
    authorize(clientSecret, search, searchTerm)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

module.exports = searchYouTube
