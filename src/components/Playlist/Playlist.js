import React from 'react'
import { map } from 'lodash'
import VideoItem from '../VideoItem/VideoItem'

import './Playlist.css'

const Playlist = ({playlistName, songs, playSong, currentVideo}) => {
  return (
    <div className="playlist">
      <div className="playlist-title">
        <span>Playlist: <span className="playlist-title--gold-font">{playlistName}</span></span>
      </div>
      <div className="playlist-list">
        <ul style={{padding: 0}}>
          {
            map(songs, (song, i) => {
              return (
                <div className="playlist-item" key={i} onClick={() => playSong(i)}>
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
