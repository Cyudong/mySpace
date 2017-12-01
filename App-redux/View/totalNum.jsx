import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import AppStore from '../store/AppStore.js'; // redux

class TotalNum extends Component {
    constructor(props) {
        super(props);
        _.bindAll(this, [
            "_onStoreChange",
            "_getTotalCount"
        ]);
        this.state = {
            count: this._getTotalCount()
        }
    } 

    componentDidMount() {
        AppStore.subscribe(this._onStoreChange);
    }

    componentWillUnmount() {
        AppStore.unsubscribe(this._onStoreChange);
    }

    _onStoreChange() {
        this.setState({
            count: this._getTotalCount()
        });
    }

    _getTotalCount() {
        let newState = AppStore.getState();
        let counterValues = newState.counterValues,
            summary = 0;
        for (let index in counterValues) {
            summary += counterValues[index].count;
        }
        return summary;
    }

    render() {
        
        return (
            <div>
                <span>Total Count: </span>
                <span>{this.state.count}</span>
            </div>
        )
    }
}

// TotalNum.propTypes = {
//     count: PropTypes.number
// }

// TotalNum.defaultProps = {
//     count: 0
// }

export default TotalNum;