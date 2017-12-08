import * as ActionTypes from './actionTypes.js';

export const increment = (name) => {
    return {
        type: ActionTypes.INCREMENT,
        name: name
    };
}

export const decrement = (name) => {
    return {
        type: ActionTypes.DECREMENT,
        name: name
    };
}