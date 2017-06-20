import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router {...this.props}>
        <Route path='/' component={Home} />
      </Router>
    )
  }
}

export default connect(null, {})(Routes)
