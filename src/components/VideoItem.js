import React from 'react'

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  listStyle: 'none',
  paddingBottom: 20
}

const imageContainerStyle = {
  width: '30%',
  textAlign: 'center',
  cursor: 'pointer'
}

const imageStyle = {
  width: 140,
  height: 105
}

const descriptionContainerStyle = {
  width: '70%',
  paddingTop: 5
}

const videoTitleStyle = {
  display: 'block',
  marginBottom: 6,
  color: 'grey',
  fontSize: 18
}

const videoChannelStyle = {
  display: 'block',
  color: '  #DAA520',
  fontSize: 12
}

const VideoItem = ({video}) => {
  return (
    <li style={containerStyle}>
      <div style={imageContainerStyle}>
        <img style={imageStyle} src={video.img} />
      </div>
      <div style={descriptionContainerStyle}>
        <span style={videoTitleStyle}>{video.title}</span>
        <span style={videoChannelStyle}>{video.channel}</span>
      </div>
    </li>
  )
}

export default VideoItem
