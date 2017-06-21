const fs = require('fs')
const readline = require('readline')
const googleAuth = require('google-auth-library')

let SCOPES = ['https://www.googleapis.com/auth/youtube.readonly']
let TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/'
let TOKEN_PATH = TOKEN_DIR + 'youtube-nodejs-quickstart.json'

const authorize = (credentials, callback, searchTerm) => {
  let clientSecret = credentials.installed.client_secret
  let clientId = credentials.installed.client_id
  let redirectUrl = credentials.installed.redirect_uris[0]
  let auth = new googleAuth()
  let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl)
  return new Promise((resolve, reject) => {
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) {
        getNewToken(oauth2Client, callback, searchTerm)
      } else {
        oauth2Client.credentials = JSON.parse(token)
        callback(oauth2Client, searchTerm)
          .then(res => resolve(res))
          .catch(err => reject(err))
      }
    })
  })
}

const getNewToken = (oauth2Client, callback, searchTerm) => {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })

  console.log('Authorize this app by visiting this url: ', authUrl)

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oauth2Client.getToken(code, (err, token) => {
      if (err) {
        console.log('Error while trying to retrieve access token', err)
        return
      }
      oauth2Client.credentials = token
      storeToken(token)
      callback(oauth2Client, searchTerm)
    })
  })
}

const storeToken = (token) => {
  try {
    fs.mkdirSync(TOKEN_DIR)
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err
    }
  }

  fs.writeFile(TOKEN_PATH, JSON.stringify(token))
  console.log('Token stored to ' + TOKEN_PATH)
}

module.exports = authorize
