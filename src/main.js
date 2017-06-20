import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

let render = () => {
  const Root = require('./components/Root.js').default

  ReactDOM.render(<Root />, rootEl)
}

if (module.hot) {
  const renderApp = render
  const renderError = err => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={err} />, rootEl)
  }

  render = () => {
    try {
      renderApp()
    } catch (err) {
      renderError(err)
    }
  }

  module.hot.accept('./components/Root', render)
}

render()
