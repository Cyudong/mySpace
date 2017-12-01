import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import SummaryStore from '../store/SummaryStore.js';

class TotalNum extends Component {
    constructor(props) {
        super(props);
        _.bindAll(this, [
            "_onStoreUpdate"
        ]);
        this.state = {
            count: SummaryStore.getSummary()
        }
    } 
    
    componentDidMount() {
        SummaryStore.addChangeListener(this._onStoreUpdate);
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this._onStoreUpdate);
    }

    _onStoreUpdate() {
        this.setState({
            count: SummaryStore.getSummary()
        })
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