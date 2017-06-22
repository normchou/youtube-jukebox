import configureStore from '../store/configureStore'
import history from './history'
import { push } from 'react-router-redux'

export default (path) => {
  return dispatch => {
    const store = configureStore(history)

    dispatch(store.push(path))
  }
}
