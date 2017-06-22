import React, { Component } from 'react'

class Playlist extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { playlist } = this.props

    let message

    if (playlist.error) {
      message = playlist.error
    } else {
      message = playlist.currentPlaylist
    }

    return (
      <div>
        <h1>Playlist</h1>
        <p>{message}</p>
      </div>
    )
  }
}

export default Playlist
