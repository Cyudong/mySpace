import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

function TotalNum({count}) {   
    
    return (
        <div>
            <span>Total Count: </span>
            <span>{count}</span>
        </div>
    );
}

function mapStateToProps(state) {
    let counterValues = state.counterValues,
        summary = 0;
    for (let index in counterValues) {
        summary += counterValues[index].count;
    }
    return {count:summary};
}

TotalNum.PropTypes = {
    count: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(TotalNum);