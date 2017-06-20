import React from 'react'
import ReactDOM from 'react-dom'
import RedBox from 'redbox-react'
import Root from './components/Root'

const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(<Root />, rootEl)
}

if (module.hot) {
  const renderApp = render
  const renderError = err => {
    ReactDOM.render(<RedBox error={err} />, rootEl)
  }

  render = () => {
    try {
      renderApp()
    } catch (err) {
      renderError(err)
    }
  }

  module.hot.accept(<Root />, render)
}

render()
