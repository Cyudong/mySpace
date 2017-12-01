import Dispatcher from '../dispatcher/dispatch.js';
import * as ActionTypes from '../action/actionTypes.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = [
    {
        name: "First",
        count: 0
    },
    {
        name: "Secont",
        count: 0
    }
];

const AppStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function() {
        return counterValues;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppStore.dispatchToken = Dispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) ||
        (action.type === ActionTypes.DECREMENT)) {
        AppStore.emitChange();
    }
});

export default AppStore;