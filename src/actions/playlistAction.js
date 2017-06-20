import axios from 'axios'
import actionType from '../constants/actionTypes'
import routes from '../constants/routes'

export const loadPlaylist = () => {
  return dispatch => {
    axios.get(routes.playlist.api )
      .then(res => {
        console.log('response from action', res.data)
      })
      .catch(err => {
        console.log('error from action', err)
      })
  }
}
