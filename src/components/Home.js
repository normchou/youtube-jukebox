import React, { Component } from 'react'
import cx from 'classnames'
import Video from './Video'
import Playlist from './Playlist'
import Search from './Search'
import { get } from 'lodash'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSearchDrawerOpen: false,
      isPlaylistLoaded: true,
      currentVideo: 0
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onCreateSubmit = this.onCreateSubmit.bind(this)

    this.props.loadPlaylist('norm')
  }

  // TODO: Add creating and searching playlists
  onSubmit(e) {
    e.preventDefault()

    const playlistRef = this.refs['playlist-id']

    this.props.loadPlaylist(playlistRef.value)
  }

  onCreateSubmit(e) {
    e.preventDefault()

    const playlistNameRef = this.refs['playlist-name']

    this.props.createPlaylist(playlistNameRef.value)
  }

  renderForms() {
    return (
      <div>
        <div>
            <p>Go to Playlist</p>
            <form onSubmit={this.onSubmit}>
              <input type='text' ref='playlist-id' />
              <button>Go</button>
            </form>
          </div>
          <div>
            <p>Create New Playlist</p>
            <form onSubmit={this.onCreateSubmit}>
              <input type='text' ref='playlist-name' />
              <button>Create</button>
            </form>
          </div>
      </div>
    )
  }

  onSearchClick() {
    this.setState({
      isSearchDrawerOpen: !this.state.isSearchDrawerOpen
    })
  }

  renderNav() {
    const { isPlaylistLoaded } = this.state

    const searchClass = cx({
      'search-drawer': true,
      'search-drawer-open': this.state.isSearchDrawerOpen
    })

    return (
      <div className="nav-container">
        <div className="nav-title">
          <span>YouTube </span>
          <span style={{color: '#DAA520'}}>JukeBox</span>
        </div>
        <div className="nav-search">
          {
            isPlaylistLoaded && <button className="nav-search-button" onClick={this.onSearchClick.bind(this)}>
                <i className="material-icons nav-search-icon">search</i>
              </button>
          }
        </div>
        <div className={searchClass}>
          <Search {...this.props} onClose={this.onSearchClick.bind(this)} />
        </div>
      </div>
    )
  }

  loadVideo(songs) {
    return get(songs[this.state.currentVideo], 'videoId', undefined)
  }

  playNext() {
    this.setState({
      currentVideo: this.state.currentVideo + 1
    })
  }

  playSong(i) {
    this.setState({
      currentVideo: i
    })
  }

  render () {
    const disablingDivClass = cx({
      'disabling-div': true,
      'disabling-div--show': this.state.isSearchDrawerOpen
    })

    return (
      <div className="main-container">
        <div onClick={this.onSearchClick.bind(this)} className={disablingDivClass} />
        {this.renderNav()}
        <div className="content-container">
          <div className="video-container">
            <Video
              name={this.loadVideo(this.props.playlist.currentPlaylist)}
              playNext={this.playNext.bind(this)} />
          </div>
          <div className="playlist-container">
            <Playlist
              playlistName="My Cool Playlist"
              currentVideo={this.state.currentVideo}
              songs={this.props.playlist.currentPlaylist}
              playSong={(i) => this.playSong(i)} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
