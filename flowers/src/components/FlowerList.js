import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadFlowerList } from '../store/actions'
import seedpackage from '../seedpackage.png';

class FlowerList extends Component {


  componentDidMount = () => {
    this.props.onFlowerListLoad()
  }

  render() {

  let flowerListItems = this.props.flowers.map((flower,index) => {
    return <div className="flowers" key={index}>
      <img className="package" src={seedpackage}></img>
      <div className="overflow">
        <img className="flowerimg" src={flower.imageURL}></img>
      </div>
      <div className="flowername flowernameheader">{flower.name}</div>
      <div className="flowername flowernamefooter">{flower.name}</div>
      <div className="flowerdescription">{flower.description}</div>
    </div>
  })

  return (
    <div>
      {flowerListItems}
    </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    flowers : state.flowers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFlowerListLoad : () => dispatch(loadFlowerList())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlowerList)
