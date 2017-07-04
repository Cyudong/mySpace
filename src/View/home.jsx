import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../Action/action-creators'

class Home extends React.Component {

  onTimeButtonClick (delay) {
   this.props.dispatch(actionCreators.getTime(delay))
  }

  onTestBtnClick() {
    this.props.dispatch(actionCreators.getTest())
  }

  render () {

    // Thanks to "connect", we're able to get specific selected data, through the props.
    var { frozen, time, reduxState, test } = this.props
    var attrs = {}
    const DELAY = 500 // in ms

    if (frozen) {
        attrs = {
          disabled: true
        }
    }

    return (
      <div>
        <h1>Provider and connect example</h1>
        <span>
          <b>What time is it?</b> { time ? `It is currently ${time}` : 'No idea yet...' }
        </span>
        <br /> <br />
        <i>
          When clicking the button below, the time will be provided after a {DELAY}ms delay.<br />
          Try to change this value (in <b>src/home.jsx - line 14</b>) to verify that the delay given correctly impacts our UI.
        </i>
        <br />
        <button { ...attrs } onClick={() => this.onTimeButtonClick(DELAY)}>Get time!</button>
        <button { ...attrs } onClick={() => this.onTestBtnClick()}>TEST !</button>
        <pre>
          redux state = { JSON.stringify(reduxState, null, 2) }
        </pre>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  
  return {
    frozen: state._time.frozen,
    time: state._time.time,
    reduxState: state,
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome