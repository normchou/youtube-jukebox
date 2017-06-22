import { assign } from 'lodash'
import actionType from '../constants/actionTypes'

let initialState = {
  result: {},
  loading: false
}

export default (state=initialState, action) => {

  switch(action.type) {
    case actionType.SEARCH_YOUTUBE_REQUEST:
      state = assign({}, state, { loading: true })
      return state

    case actionType.SEARCH_YOUTUBE_SUCCESS:
      state = assign({}, state, { result: action.payload, loading: false })
      return state

    case actionType.SEARCH_YOUTUBE_FAILED:
      state = assign({}, state, { loading: false })
      return state

    default:
      return state
  }
}
