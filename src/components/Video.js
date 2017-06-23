import React, { Component } from 'react'
import { map, isUndefined } from 'lodash'
import YouTube from 'react-youtube'

const Video = ({name, playNext}) => {
  return (
    <div>
      <YouTube
        videoId={name}
        onEnd={playNext}
        opts={{ height: "390", width: "640" }} />
    </div>
  )
}

export default Video
