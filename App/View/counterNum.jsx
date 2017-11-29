import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

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
        let { name, count, onChange } = this.props;
        onChange('increment', name)
    }

    _onDecrement() {
        let { name, count, onChange } = this.props;
        onChange('decrement', name)
    }

    render() {
        let { name, count, onChange } = this.props;
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
    count: PropTypes.number,
    onChange: PropTypes.fuc
}

CounterNum.defaultProps = {
    name: 'default',
    count: 0,
    onChange: ()=>{}
}

export default CounterNum;