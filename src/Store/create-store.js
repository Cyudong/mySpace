import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from '../Action/promise-middleware'
import reducers from '../Reducer/reducers'

export default function (data) {
  
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducers, data)

  return store
}