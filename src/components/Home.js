import React, { Component } from 'react'

class Home extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onCreateSubmit = this.onCreateSubmit.bind(this)
  }

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

  render () {
    return (
      <div>
        <h1>Home</h1>
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
}

export default Home
