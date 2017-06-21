import { assign } from 'lodash'
import actionType from '../constants/actionTypes'

let initialState = {
  result: {}
}

export default (state=initialState, action) => {

  switch(action.type) {
    case actionType.SEARCH_YOUTUBE_SUCCESS:
      state = assign({}, state, { result: action.payload })
      return state

    default:
      return state
  }
}
