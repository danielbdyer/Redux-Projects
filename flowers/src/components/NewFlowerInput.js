import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadFlowerList } from '../store/actions'
import seedpackage from '../seedpackage.png';

class NewFlowerInput extends Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    const thisnewflower = this.props.newflower
    let value = e.target.value
    let property = e.target.name

    thisnewflower[property] = value

    this.forceUpdate();
  }

  handleSubmit(event) {

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }

    })
    // do not submit the form
    event.preventDefault()
  }

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
      <input type="text" name="name" placeholder="Flower Name" onChange={this.handleChange}></input>
      <input type="text" name="description" placeholder="Flower Description" onChange={this.handleChange}></input>
      <input type="text" name="imageURL" placeholder="Flower URL" onChange={this.handleChange}></input>
      <input type="submit" placeholder="Add New Flower"></input>
    </form>
    )
  }
}

export default NewFlowerInput
