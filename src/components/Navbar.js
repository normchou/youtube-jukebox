import React from 'react'

const navGridStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '#263238'
}

const titleStyle = {
  paddingLeft: 40,
  color: '#FAFAFA',
  fontSize: 25,
  letterSpacing: 3
}

const searchIconStyle = {
  marginLeft: 'auto',
  paddingRight: 40
}

const iconStyle = {
  color: '#FAFAFA',
  fontSize: 36,
  cursor: 'pointer'
}

const Navbar = ({showSearch}) => {
  return (
    <div style={navGridStyle}>
      <div style={titleStyle}>
        <p>YouTube <span style={{color: '#DAA520'}}>JukeBox</span></p>
      </div>
      <div style={searchIconStyle}>
        {
          showSearch && <i style={iconStyle} className="material-icons">search</i>
        }
      </div>
    </div>
  )
}

export default Navbar
