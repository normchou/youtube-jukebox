import { assign } from 'lodash'
import actionType from '../constants/actionTypes'

let initialState = {
  playlist: {}
}

export default (state=initialState, action) => {

  switch(action.type) {
    case actionType.LOAD_PLAYLIST_SUCCESS:
      state = assign({}, state, { playlist: action.payload })
      return state

    default:
      return state
  }
}
