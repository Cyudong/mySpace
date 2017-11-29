import React from 'react';
// import { Provider } from 'react-redux'
import _ from 'lodash';
import CounterNum from './counterNum.jsx';
import TotalNum from './totalNum.jsx';

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    _.bindAll(this, [
      "_getTotalCount",
      "_onChangeCount",
      "_onIncrementCount",
      "_onDecrementCount"
    ]);
    this.state = {
      counters: [
        {
          name: "First",
          count: 0
        },
        {
          name: "Secont",
          count: 0
        }
      ]
    }
  }

  _getTotalCount() {
    let { counters } = this.state;
    let totalCount = 0;
    for (let index in counters) {
      totalCount += counters[index].count;
    }
    return totalCount;
  }

  _onChangeCount(type, name) {
    switch (type) {
      case 'increment':
        this._onIncrementCount(name);
        break;
      case 'decrement':
        this._onDecrementCount(name);
        break;    
      default:
        break;
    }
  }

  _onIncrementCount(name) {
    let counters = this.state.counters;
    for (let obj of counters){
      if (obj.name === name) {
        obj.count += 1;
      }
    }
    this.setState({
      counters
    });
  }

  _onDecrementCount(name) {
    let counters = this.state.counters;
    for (let obj of counters) {
      if (obj.name === name) {
        if (obj.count > 0) {          
          obj.count -= 1;
        }
      }
    }
    this.setState({
      counters
    });
  }

  render() {
    let { counters } = this.state;

    return (
      <div>
        {
          counters.map((obj, index) => {
            return (<CounterNum key={index}
              name={obj.name} count={obj.count}
              onChange={this._onChangeCount}
            />);
          })
        }
        <TotalNum count={this._getTotalCount()} />
      </div>
    )
  }
}