import { createStore } from 'redux';
import reducer from '../reduce/reducer.js';

const CHANGE_EVENT = 'changed';

const initValues = {
    counterValues:[
        {
            name: "First",
            count: 0
        },
        {
            name: "Secont",
            count: 0
        }
    ]
};

const AppStore = createStore(reducer, initValues);

export default AppStore;