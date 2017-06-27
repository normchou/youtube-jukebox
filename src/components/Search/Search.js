import React, { Component } from 'react'
import VideoItem from '../VideoItem/VideoItem'
import { map } from 'lodash'
import './Search.css'

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

  clearSearchForm() {
    let searchPhraseRef = this.refs['search-phrase']
    searchPhraseRef.value = ''
  }

  addToPlaylist(video) {
    // TODO:  1) Use active playlist
    //        2) on success, close search
    //        3) clear search field and search result

    // this.props.updatePlaylist(this.props.playlist.activePlaylist, video)
    this.props.updatePlaylist('norm', video)
    this.clearSearchForm()
    this.props.onClose()
  }

  render () {
    const searchResult = this.props.search.result

    return (
      <div>
        <div style={{ position: 'fixed', width: '100%', backgroundColor: 'black' }}>
          <div style={{ height: 76, backgroundColor: '#DAA520' }}>
            <button onClick={this.props.onClose}
              style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none', padding: 0, marginTop: 16, marginLeft: 16, outline: 'none' }}>
              <i style={{ fontSize: 36 }} className= "material-icons">close</i>
            </button>
          </div>
          <div className="clearfix" style={{ margin: 16 }}>
            <form onSubmit={this.onSubmit}>
              <input style={{ float: 'left', width: 330, height: 36, fontSize: 16, outlineColor: '#DAA520', paddingLeft: 5 }} ref="search-phrase" type="text" placeholder="Search" />
              <button style={{ float: 'left', cursor: 'pointer', backgroundColor: '#DAA520', border: 'none', padding: 2, outline: 'none', marginLeft: 4, width: 44 }}>
                <i className="material-icons nav-search-icon">search</i>
              </button>
            </form>
          </div>
        </div>
        <div style={{ overflow: 'scroll', padding: '148px 16px 0', height: '100%' }}>
          <ul style={{padding: 0}}>
            {
              map(searchResult, (song, i) => {
                return (
                  <div style={{ cursor: 'pointer' }} key={i} onClick={() => this.addToPlaylist(song)}>
                    <VideoItem video={song} />
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Search
