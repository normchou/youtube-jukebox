import { assign } from 'lodash'
import actionType from '../constants/actionTypes'

let initialState = {
  videos: [],
  currentPlaylist: '',
  loading: false,
  error: ''
}

export default (state=initialState, action) => {

  switch(action.type) {
    case actionType.LOAD_PLAYLIST_SUCCESS:
      state = assign({}, state, { videos: action.payload })
      return state

  case actionType.CREATE_PLAYLIST_REQUEST:
      state = assign({}, state, { loading: true })
      return state

    case actionType.CREATE_PLAYLIST_SUCCESS:
      state = assign({}, state, { currentPlaylist: action.payload, loading: false })
      return state

    case actionType.CREATE_PLAYLIST_FAILED:
      state = assign({}, state, { error: action.payload, loading: false })
      return state

    default:
      return state
  }
}
