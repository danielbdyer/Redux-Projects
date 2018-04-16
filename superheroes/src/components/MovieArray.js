import React, { Component } from 'react';
/* import CounterControl from './CounterControl' */

import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

class MoviesIntake extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name : '',
      url : ''
    }

  }

  onMovieNameChangedHandler = (event) => {

    this.setState({
      ...state,
      name : event.target.value
    })

  }

  onPosterURLChangedHandler = (event) => {

    this.setState({
      ...state,
      url : event.target.value
    })

  }

  render() {
    return (
        <div>
          <input onChange={this.onNameChangedHandler} type="text" />
          <input onChange={this.onPosterURLChangedHandler} type="text" />
          <button onClick={() => this.props.onSaveDetails(this.state.name,this.state.url)}>Save Entry</button>
        </div>
    )
  }

}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    movies : state.movies
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    onSaveDetails : (name,url) => dispatch({type : actionTypes.ADD_MOVIE, response: {name: name, url: url}})
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
