// import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reduce/reducer.js';
import * as Actions from '../action/actions.js';

const initValues = {
    counterValues:[
        {
            name: "First",
            count: 0
        },
        {
            name: "Secont",
            count: 10
        }
    ]
};

export default function configureStore() {
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ Actions });
  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const store = createStore(reducer, initValues, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reduce/reducer.js', () => {
      const nextReducer = require('../reduce/reducer.js');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

// const AppStore = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
//   initValues
// ));

// export default AppStore;