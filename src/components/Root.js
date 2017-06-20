import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../store/configureStore'
import Routes from './Routes'

class Root extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore(browserHistory)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Routes history={syncHistoryWithStore(browserHistory, this.store)} />
      </Provider>
    )
  }
}

export default Root
