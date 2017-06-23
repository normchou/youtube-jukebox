import React, { Component } from 'react'
import { map, isUndefined } from 'lodash'
import YouTube from 'react-youtube'
import Search from './Search'

class Playlist extends Component {
  constructor(props) {
    super(props)

    if (this.props.playlist.activePlaylist.length < 1) {
      const pathName = this.props.history.location.pathname
      const playlistName = pathName.split('/')[2]

      // this.props.loadPlaylist(playlistName)
    }

    this.state = {
      currentVideoCount: 0
    }

    this.renderSongs = this.renderSongs.bind(this)
    this.renderVideo = this.renderVideo.bind(this)
    this.whenVideoEnds = this.whenVideoEnds.bind(this)
  }

  renderSongs() {
    const { currentPlaylist } = this.props.playlist

    if (currentPlaylist.length === 0) {
      return null
    }

    return map(currentPlaylist, (song, i) => {
      return <li key={i} onClick={() => this.setState({ currentVideoCount: i })}>{song.title}</li>
    })
  }

  whenVideoEnds() {
      this.setState({
        currentVideoCount: this.state.currentVideoCount + 1
      })
  }

  renderVideo() {
    const { currentPlaylist } = this.props.playlist

    if (currentPlaylist.length === 0) {
      return null
    }

    const count = this.state.currentVideoCount
    const videoId = currentPlaylist[count].videoId

    return (
      <YouTube
          videoId={videoId}
          onEnd={this.whenVideoEnds}
          opts={{ height: "390", width: "640", playerVars: { autoplay: 1 }}} />
    )
  }

  render () {
    const { playlist } = this.props

    let message

    if (playlist.error) {
      message = playlist.error
    } else {
      message = playlist.activePlaylist
    }

    return (
      <div>
        <h1>Playlist</h1>
        <p>{message}</p>
        {this.renderVideo()}
        <ul>
          {this.renderSongs()}
        </ul>
        <div>
          <Search {...this.props} />
        </div>
      </div>
    )
  }
}

export default Playlist
