import React, { Component } from 'react'
import { map, isUndefined } from 'lodash'
import YouTube from 'react-youtube'

const Video = ({name, playNext}) => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <YouTube
        videoId={name}
        onEnd={playNext}
        opts={{ height: "390", width: "640", playerVars: { autoplay: 1 } }} />
    </div>
  )
}

export default Video
