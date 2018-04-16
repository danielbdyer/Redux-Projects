import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadFlowerList } from '../store/actions'
import seedpackage from '../seedpackage.png';

class NewFlowerPreview extends Component {

  constructor(props){
    super(props)

    this.state = {
      newflower: [
        name: "test",
        description: "testing2",
        imageURL: "testing3"
      ]
    }
  }

  render(){
    return (
      <div className="flowers">
        <img className="package" src={seedpackage}></img>
        <div className="overflow">
          <img className="flowerimg" src={newflower.imageURL}></img>
        </div>
        <div className="flowername flowernameheader">{newflower.name}</div>
        <div className="flowername flowernamefooter">{newflower.name}</div>
        <div className="flowerdescription">{newflower.description}</div>
      </div>
    )
  }
}

export default NewFlowerPreview
