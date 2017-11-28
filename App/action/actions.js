import * as ActionTypes from './actionTypes.js';
import Dispatcher from '../dispatcher/dispatch.js';

export const increment = (counterCaption) => {
    Dispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    });
}

export const decrement = (counterCaption) => {
    Dispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    });
}