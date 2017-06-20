import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

const Root = () => (
  <Router>
    <Route path='/' component={Home} />
  </Router>
)

export default Root
