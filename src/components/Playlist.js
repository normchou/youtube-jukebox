import React from 'react'
import { map } from 'lodash'
import VideoItem from './VideoItem'

const containerStyle = {
  padding: '0 10px'
}

const titleContainerStyle = {
  padding: '30px 0',
  position: 'fixed',
  width: '100%',
  height: 45,
  backgroundColor: '#212121'
}

const titleFontStyle = {
  fontSize: 32,
  color: 'grey',
  letterSpacing: 3
}

const listStyle = {
  paddingBottom: 10,
  paddingTop: 100
}

const Playlist = ({playlistName, songs, playSong, currentVideo}) => {
  return (
    <div style={containerStyle}>
      <div style={titleContainerStyle}>
        <span style={titleFontStyle}>Playlist: <span style={{ color: '#DAA520'}}>{playlistName}</span></span>
      </div>
      <div style={listStyle}>
        <ul style={{padding: 0}}>
          {
            map(songs, (song, i) => {
              return (
                <div key={i} onClick={() => playSong(i)}>
                  <VideoItem isPlaying={i === currentVideo} video={song} />
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist
