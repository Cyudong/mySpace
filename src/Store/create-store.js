import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './Reducer/promise-middleware'
import * as reducers from './Reducer/reducers'

export default function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}