import React, { Component } from 'react'
import { map } from 'lodash'

class Search extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.addToPlaylist = this.addToPlaylist.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();

    let searchPhraseRef = this.refs['search-phrase']
    this.props.searchYouTube(searchPhraseRef.value)
  }

  addToPlaylist(video) {
    this.props.updatePlaylist('norm', video)
  }

  render () {
    const searchResult = this.props.search.result
    return (
      <div>
        <h1 style={{ marginLeft: '40px' }}>Search</h1>
          <form style={{ marginLeft: '40px' }}onSubmit={this.onSubmit}>
            <input style={{  width: '466px', height: '30px', fontSize: '16px' }} ref="search-phrase" type="text" />
            <button style={{ height: '36px', width: '70px', padding: '3px 6px 0px' }}>Search</button>
          </form>
          <ul style={{ listStyleType: 'none' }}>
            {
              map(searchResult, (video, i) => {
                return (
                  <li key={i}
                    style={{ border: '1px solid black', padding: '10px', marginBottom: '20px', width: '520px' }}
                    onClick={() => this.addToPlaylist(video)}>
                    <p style={{ float: 'right' }}>{video.title}</p>
                    <img src={video.img} />
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

export default Search
