import * as ActionTypes from '../action/actionTypes.js';

export default (state, action) => {
    const { type, name } = action;
    const { counterValues } = state;
    // console.log(action, counterValues)
    switch (type) {
        case ActionTypes.INCREMENT:
            for (let obj of counterValues) {
                if (obj.name === name) {
                    obj.count += 1;
                }
            }
            return state;
            break;

        case ActionTypes.DECREMENT:
            for (let obj of counterValues) {
                if (obj.name === name) {
                    if (obj.count > 0) {
                        obj.count -= 1;
                    }
                }
            }
            return state;
            break;
    
        default:
            return state;    
            break;
    }
}