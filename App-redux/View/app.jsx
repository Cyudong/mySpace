import React from 'react';
import _ from 'lodash';
import CounterNum from './counterNum.jsx';
import TotalNum from './totalNum.jsx';
import AppStore from '../store/AppStore.js'; // redux
import Provider from './provider.jsx'; 

export default class Application extends React.Component {
  constructor(props) {
    super(props);
    _.bindAll(this, [
      "_getTotalCount",
      "_onChangeCount",
      "_onIncrementCount",
      "_onDecrementCount",
      "_getOwnState",
      "_onStoreChange"
    ]);
    
    this.state = {
      counters: this._getOwnState()
    }
  }

  componentDidMount() {
    AppStore.subscribe(this._onStoreChange);
  }

  componentWillUnmount() {
    AppStore.unsubscribe(this._onStoreChange);
  }

  _onStoreChange() {
    let newState = AppStore.getState();
    this.setState({
      counters: newState.counterValues
    });
  }

  _getOwnState() {
    let newState = AppStore.getState();
    return newState.counterValues;
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
      <Provider store={AppStore} >
        {
          counters.map((obj, index) => {
            return (<CounterNum key={index}
              name={obj.name} count={obj.count}
            />);
          })
        }
        <TotalNum />
      </Provider>
    )
  }
}