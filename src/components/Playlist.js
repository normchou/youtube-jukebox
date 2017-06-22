import React, { Component } from 'react'
import { map } from 'lodash'

class Playlist extends Component {
  constructor(props) {
    super(props)

    this.renderSongs = this.renderSongs.bind(this)
  }

  renderSongs() {
    const { currentPlaylist } = this.props.playlist

    return map(currentPlaylist, (song, i) => {
      return <li key={i}>{song.title}</li>
    })
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
        <ul>
          {this.renderSongs()}
        </ul>
      </div>
    )
  }
}

export default Playlist
