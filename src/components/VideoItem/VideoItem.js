import React from 'react'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  marginBottom: 20
}

const imageContainerStyle = {
  width: '140px',
  textAlign: 'center',
  cursor: 'pointer',
  marginRight: '12px'
}

const imageStyle = {
  width: 140,
  height: 105
}

const activeImageStyle = {
  width: 140,
  height: 105,
  border: '1px solid gold'
}


const descriptionContainerStyle = {
  paddingTop: 5
}

const videoTitleStyle = {
  display: 'block',
  marginBottom: 6,
  color: 'grey',
  fontSize: 16
}

const videoChannelStyle = {
  display: 'block',
  color: '  #DAA520',
  fontSize: 10
}

const VideoItem = ({video, isPlaying}) => {
  return (
    <li style={containerStyle}>
      <div style={imageContainerStyle}>
        <img style={isPlaying ? activeImageStyle : imageStyle} src={video.img} />
      </div>
      <div style={descriptionContainerStyle}>
        <span style={videoTitleStyle}>{video.title}</span>
        <span style={videoChannelStyle}>{video.channel}</span>
      </div>
    </li>
  )
}

export default VideoItem
