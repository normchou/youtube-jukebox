import React, { Component } from 'react'
import Video from './Video'
import Playlist from './Playlist2'
import Navbar from './Navbar'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const navContainerStyle = {

}

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%'
}

const videoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#212121',
  width: '60%'
}

const playlistContainerStyle = {
  backgroundColor: '#212121',
  width: '40%'
}



class Home extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onCreateSubmit = this.onCreateSubmit.bind(this)

    this.props.loadPlaylist('norm')
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

  render () {
    return (
      <div style={containerStyle}>
        <div style={navContainerStyle}>
          <Navbar showSearch />
        </div>
        <div style={contentContainerStyle}>
          <div style={videoContainerStyle}>
            <Video name='' playNext={() => console.log('play next')} />
          </div>
          <div style={playlistContainerStyle}>
            <Playlist playlistName="COOL" songs={this.props.playlist.currentPlaylist} playSong={(e) => console.log('play song', e)} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
