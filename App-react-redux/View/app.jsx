import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CounterNum from './counterNum.jsx';
import TotalNum from './totalNum.jsx';

class Application extends Component {

  render(){
    const counters = this.context.store.getState().counterValues;
    // console.log(counters)
    return (
      <div>
        {
          counters.map((obj, index) => {
            return (<CounterNum key={index}
              name={obj.name} count={obj.count}
            />);
          })
        }
        <TotalNum />
      </div>
    );
  }
}

Application.contextTypes = {
  store: PropTypes.object.isRequired
};

export default Application;