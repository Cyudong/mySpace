import Dispatcher from '../dispatcher/dispatch.js';
import * as ActionTypes from '../action/actionTypes.js';
import { EventEmitter } from 'events';
// import AppStore from './AppStore.js';

const CHANGE_EVENT = 'changed';
const counterValues = [
    {
        name: "First",
        count: 0
    },
    {
        name: "Secont",
        count: 10
    }
];

const CounterStore = Object.assign({}, EventEmitter.prototype, {
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

CounterStore.dispatchToken = Dispatcher.register((action) => {
    // let counterValues = AppStore.getCounterValues();
    if (action.type === ActionTypes.INCREMENT) {
        // counterValues[action.counterCaption]++;
        for (let obj of counterValues) {
            if (obj.name === action.name) {
                obj.count += 1;
            }
        }
        // Dispatcher.waitFor([AppStore.dispatchToken]);
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        // counterValues[action.counterCaption]--;
        for (let obj of counterValues) {
            if (obj.name === action.name) {
                if (obj.count > 0) {
                    obj.count -= 1;
                }
            }
        }
        // Dispatcher.waitFor([AppStore.dispatchToken]);
        CounterStore.emitChange();
    }
});

export default CounterStore;