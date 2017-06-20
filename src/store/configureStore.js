import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducers from '../reducers'

export default (history) => {
  let middlewares = [thunk, routerMiddleware(history)];
  let store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
}
