import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import * as Actions from '../action/actions.js';
import AppStore from '../store/AppStore.js'; // redux

const BtnStyle = {
    "marginRight": "10px",
    "width": "30px",
    "height": "25px"
}

const DivStyle = {
    "margin": "5px 0px"
}

class CounterNum extends Component {
    constructor(props) {
        super(props);
        _.bindAll(this, [
            "_onIncrement",
            "_onDecrement"
        ]);
    }

    _onIncrement() {
        let { name } = this.props;
        AppStore.dispatch(Actions.increment(name));
    }

    _onDecrement() {
        let { name } = this.props;
        AppStore.dispatch(Actions.decrement(name));
    }

    render() {
        let { name, count } = this.props;
        return (
            <div style={DivStyle}>
                <button style={BtnStyle} onClick={this._onIncrement}>+</button>    
                <button style={BtnStyle} onClick={this._onDecrement}>-</button>
                <span>{name + " Count: "}</span>
                <span>{count}</span>
            </div>
        )
    }
}

CounterNum.proptypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number
}

CounterNum.defaultProps = {
    name: 'default',
    count: 0
}

export default CounterNum;