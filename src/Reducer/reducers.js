import { combineReducers } from 'redux';

import reducerTime from '../Reducer/reducer-time'
import reducerTest from '../Reducer/reducer-test'

var reducers = combineReducers({ time: reducerTime, test: reducerTest });

export default reducers;