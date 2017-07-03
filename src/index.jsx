import React from 'react'
import { render } from 'react-dom'
import createStore from './create-store'
import Application from './application'

const store = createStore()

render(
  // ... and to provide our Redux store to our Root component as a prop so that Redux
  // Provider can do its job.
  <Application store={store} />,
  document.getElementById('app-wrapper')
)