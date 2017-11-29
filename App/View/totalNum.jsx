import React, { Component, PropTypes } from 'react';

class TotalNum extends Component {
    constructor(props) {
        super(props);

    }    

    render() {

        return (
            <div>
                <span>Total Count: </span>
                <span>{this.props.count}</span>
            </div>
        )
    }
}

TotalNum.propTypes = {
    count: PropTypes.number
}

TotalNum.defaultProps = {
    count: 0
}

export default TotalNum;