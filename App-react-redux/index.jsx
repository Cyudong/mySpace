import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './View/app.jsx';
import ConfigureStore from './store/AppStore.js'; // redux

const AppStore = ConfigureStore();
render(
  // ... and to provide our Redux store to our Root component as a prop so that Redux
  // Provider can do its job.
  
  <Provider store={AppStore} >
    <App />
  </Provider>,
  document.getElementById('app-wrapper')
)