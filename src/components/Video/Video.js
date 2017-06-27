import React, { Component } from 'react'
import { map, isUndefined } from 'lodash'
import YouTube from 'react-youtube'

import './Video.css'

const Video = ({name, playNext}) => {
  return (
    <div className="video">
      <YouTube
        videoId={name}
        onEnd={playNext}
        opts={{ height: "390", width: "640", playerVars: { autoplay: 0 } }} />
    </div>
  )
}

export default Video
