import axios from 'axios'
import actionType from '../constants/actionTypes'
import routes from '../constants/routes'
import { push } from 'react-router-redux'

export const loadPlaylist = (playlistId) => {
  return dispatch => {
    dispatch({ type: actionType.LOAD_PLAYLIST_REQUEST })

    axios.post(routes.playlist.api, { id: playlistId })
      .then(res => {
        dispatch({
          type: actionType.LOAD_PLAYLIST_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log('error from action', err)
      })
  }
}

export const createPlaylist = (playlistName) => {
  return dispatch => {
    dispatch({ type: actionType.CREATE_PLAYLIST_REQUEST })

    axios.post(`${routes.playlist.api}/create`, { name: playlistName })
      .then(res => {
        if (res.data.error) {
          dispatch({
            type: actionType.CREATE_PLAYLIST_FAILED,
            payload: res.data.error
          })
          dispatch(push('/playlist'))
        } else {
          dispatch({
            type: actionType.CREATE_PLAYLIST_SUCCESS,
            payload: res.data.playlistName
          })
          dispatch(push('/playlist'))
        }
      })
      .catch(err => {
        dispatch({
          type: actionType.CREATE_PLAYLIST_FAILED,
          payload: err
        })
        dispatch(push('/playlist'))
      })
  }
}
