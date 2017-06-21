import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import playlistReducer from './playlistReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  routing: routerReducer,
  playlist: playlistReducer,
  search: searchReducer
})
