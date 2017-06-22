import axios from 'axios'
import actionType from '../constants/actionTypes'
import routes from '../constants/routes'
import { push } from 'react-router-redux'

export const loadPlaylist = (playlistName) => {
  return dispatch => {
    dispatch({ type: actionType.LOAD_PLAYLIST_REQUEST })

    axios.post(routes.playlist.api, { name: playlistName })
      .then(res => {
        if (res.data.error) {
          dispatch({
            type: actionType.LOAD_PLAYLIST_FAILED,
            payload: res.data.error
          })
          dispatch(push(`/playlist/${playlistName}`))
        } else {
          dispatch({
            type: actionType.LOAD_PLAYLIST_SUCCESS,
            payload: res.data
          })
          dispatch(push(`/playlist/${playlistName}`))
        }
      })
      .catch(err => {
        dispatch({
          type: actionType.LOAD_PLAYLIST_FAILED,
          payload: err
        })
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
          dispatch(push(`/playlist/${playlistName}`))
        } else {
          dispatch({
            type: actionType.CREATE_PLAYLIST_SUCCESS,
            payload: res.data.playlistName
          })
          dispatch(push(`/playlist/${playlistName}`))
        }
      })
      .catch(err => {
        dispatch({
          type: actionType.CREATE_PLAYLIST_FAILED,
          payload: err
        })
        dispatch(push(`/playlist/${playlistName}`))
      })
  }
}

export const updatePlaylist = (playlistName, video) => {
  return dispatch => {
    dispatch({ type: actionType.UPDATE_PLAYLIST_REQUEST })

    axios.post(`${routes.playlist.api}/update`, { name: playlistName, video })
      .then(res => {
        dispatch({
          type: actionType.UPDATE_PLAYLIST_SUCCESS,
          payload: res.data
        })
        dispatch(push(`/playlist/${playlistName}`))
      })
      .catch(err => {
        dispatch({
          type: actionType.UPDATE_PLAYLIST_FAILED,
          payload: err
        })
      })
  }
}
