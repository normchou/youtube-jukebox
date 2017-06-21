import axios from 'axios'
import actionType from '../constants/actionTypes'
import routes from '../constants/routes'

export const searchYouTube = (word) => {
  return dispatch => {
    dispatch({ type: actionType.SEARCH_YOUTUBE_REQUEST });

    axios.post(`${routes.search.url}/${word}`)
      .then(res => {
        dispatch({
          type: actionType.SEARCH_YOUTUBE_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: actionType.SEARCH_YOUTUBE_FAILED,
          payload: err
        })
      })
  }
}
