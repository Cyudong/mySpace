import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as Actions from '../action/actions.js';

const BtnStyle = {
    "marginRight": "10px",
    "width": "30px",
    "height": "25px"
}

const DivStyle = {
    "margin": "5px 0px"
}

function CounterNum({name, count, onIncrement, onDecrement}) {
    console.log(name, count)
    return (
        <div style={DivStyle}>
            <button style={BtnStyle} onClick={onIncrement}>+</button>    
            <button style={BtnStyle} onClick={onDecrement}>-</button>
            <span>{name + " Count: "}</span>
            <span>{count}</span>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    console.log(state, ownProps)
  return {
    count: ownProps.count
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.name));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.name));
    }
  }
}

CounterNum.proptypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterNum);