import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { loadPlaylist, createPlaylist, updatePlaylist } from '../actions/playlistActions'
import { searchYouTube } from '../actions/searchActions'
import Home from './Home/Home'
import Playlist from './Playlist/Playlist'
import Search from './Search/Search'

class Routes extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ConnectedRouter {...this.props}>
        <Switch>
          <Route exact path='/' render={() => <Home {...this.props} />} />
          <Route path='/search' render={() => <Search {...this.props} />} />
          <Route path='/search/:searchPhrase' component={Search} />
          <Route path='/playlist' render={() => <Playlist {...this.props} />} />
          <Route path='/playlist/:id' component={Playlist} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { createPlaylist, updatePlaylist, loadPlaylist, searchYouTube })(Routes)
