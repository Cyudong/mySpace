import * as ActionTypes from './actionTypes.js';
import Dispatcher from '../dispatcher/dispatch.js';

export const increment = (name) => {
    Dispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        name: name
    });
}

export const decrement = (name) => {
    Dispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        name: name
    });
}