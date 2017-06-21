import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Fade } from 'react-router-dom'
import { loadPlaylist } from '../actions/playlistAction'
import { searchYouTube } from '../actions/search'
import Home from './Home'
import Playlist from './Playlist'
import Search from './Search'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.props.loadPlaylist
  }

  render() {
    return (
      <Router >
        <Switch>
          <Route exact path='/' render={() => <Home {...this.props} />} />
          <Route path='/search' render={() => <Search {...this.props} />} />
          <Route path='/search/:searchPhrase' component={Search} />
          <Route path='/playlist' component={Playlist} />
          <Route path='/playlist/:id' component={Playlist} />
          <Route component={Home} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { loadPlaylist, searchYouTube })(Routes)
