import React, { Component } from 'react';
import CounterControl from './CounterControl'
import CounterOutput from './CounterOutput'
import CounterResult from './CounterResult'

import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name : ''
    }

  }

  onNameChangedHandler = (event) => {

    this.setState({
      name : event.target.value
    })

  }

  render() {
    return (
        <div>
          <input onChange={this.onNameChangedHandler} type="text" />
          <button onClick={() => this.props.onSaveName(this.state.name)}>Save Name</button>
          <CounterOutput counterLabel = {this.props.ctr} />
          <CounterControl title="increment +1" clicked = {this.props.onIncrementCounter} />
          <CounterControl title="decrement -1" clicked  = {this.props.onDecrementCounter} />
          <CounterControl title="increment by +5" clicked = {this.props.onIncrementByFiveCounter } />
          <CounterControl title="decrement by -5" clicked = {this.props.onDecrementByFiveCounter} />
          <button onClick={this.props.onSaveResult}>Save Result</button>
          <CounterResult results = {this.props.res} />

        </div>
    )
  }

}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    ctr : state.counter,
    res : state.results
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type : actionTypes.INC_COUNTER}),
    onDecrementCounter : () => dispatch({type : actionTypes.DEC_COUNTER}),
    onIncrementByFiveCounter : () => dispatch({type: actionTypes.INC_COUNTER_BY_5}),
    onDecrementByFiveCounter : () => dispatch({type: actionTypes.DEC_COUNTER_BY_5}),
    onSaveResult : () => dispatch({type : actionTypes.ON_SAVE_RESULT}),
    onSaveName : (name) => dispatch({type : actionTypes.ON_SAVE_NAME, value : name})
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
