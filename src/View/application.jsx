import React from 'react'
import { Provider } from 'react-redux'
import Home from './home'

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={ this.props.store }>
        <Home />
      </Provider>
    )
  }
}