import React, { Component } from 'react';
import CounterControl from './CounterControl'
import CounterOutput from './CounterOutput'
import { connect } from 'react-redux'

class Counter extends Component {

  constructor(props) {
    super(props)

    // you can comment this out since
    // we are not using local state
    /*
    this.state = {
      counter : 0
    } */

  }

  // you can comment this out because we are not using
  // local events/handlers
  /*
  incrementCounterHandler = () => {

      this.setState({
        counter : this.state.counter + 1
      })

  }*/

  render() {
    return (
        <div>
          <CounterOutput counterLabel = {this.props.ctr} />
          <CounterControl title="increment +1" onClicked = {this.props.onIncrementCounter} />
          <CounterControl title="decrement -1" onClicked = {this.props.onDecrementCounter} />
          <CounterControl title="increment by +5" onClicked = {this.props.onIncrementByFiveCounter } />
          <CounterControl title="decrement by -5" onClicked = {this.props.onDecrementByFiveCounter} />
        </div>
    )
  }

}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    ctr : state.counter
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type : "INC_COUNTER"}),
    onDecrementCounter : () => dispatch({type : "DEC_COUNTER"}),
    onIncrementByFiveCounter : () => dispatch({type : "INC_COUNTER_BY_5"}),
    onDecrementByFiveCounter : () => dispatch({type : "DEC_COUNTER_BY_5"}),
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
