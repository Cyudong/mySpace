import Dispatcher from '../dispatcher/dispatch.js';
import * as ActionTypes from '../action/actionTypes.js';
// import AppStore from './AppStore.js';
import CounterStore from './CounterStore.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (let index in counterValues) {
        summary += counterValues[index].count;
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        // console.log('b' + computeSummary(CounterStore.getCounterValues()))
        return computeSummary(CounterStore.getCounterValues());
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});


SummaryStore.dispatchToken = Dispatcher.register((action) => {
    if ((action.type === ActionTypes.INCREMENT) ||
        (action.type === ActionTypes.DECREMENT)) {
        Dispatcher.waitFor([CounterStore.dispatchToken]);

        SummaryStore.emitChange();
    }
});

export default SummaryStore;