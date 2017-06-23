import React from 'react'
import { map } from 'lodash'
import VideoItem from './VideoItem'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '0 10px'
}

const titleContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '10px 0',
  width: '100%',
  height: '20%',
  paddingLeft: 18
}

const titleFontStyle = {
  fontSize: 32,
  color: 'grey',
  letterSpacing: 3
}

const listStyle = {
  marginBottom: 10,
  width: '100%',
  height: '100%'
}

const Playlist = ({playlistName, songs, playSong}) => {
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
                <VideoItem video={song} key={i} onClick={() => playSong(song)} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist
