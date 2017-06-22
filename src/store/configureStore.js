import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

export default (history) => {
  let middlewares = [routerMiddleware(history), thunk];

  if (process.env.NODE_ENV !== 'production') {
      const logger = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error
    })

    middlewares.push(logger)
  }

  let store = createStore(reducers, applyMiddleware(...middlewares))

  return store;
}
