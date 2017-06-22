import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../store/configureStore'
import Routes from './Routes'
import history from './history'
import { Route } from 'react-router'
import Playlist from './Playlist'
import { persistStore, autoRehydrate } from 'redux-persist'


const App = withRouter(Routes)

class Root extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore(history)
  }

  render() {
    return (
      <Provider store={this.store}>
        <App history={history} />
      </Provider>
    )
  }
}

export default Root
