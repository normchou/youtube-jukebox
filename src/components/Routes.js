import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import { loadPlaylist } from '../actions/playlistAction'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.props.loadPlaylist()
  }

  render() {
    return (
      <Router {...this.props}>
        <Route path='/' component={Home} />
      </Router>
    )
  }
}

export default connect(null, { loadPlaylist })(Routes)
