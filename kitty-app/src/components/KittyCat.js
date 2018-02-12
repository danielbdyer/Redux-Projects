import React, { Component } from 'react';
import kittenSpawn from './kittenSpawn'
import kittenArmy from './kittenArmy'
import { connect } from 'react-redux'

class KittyCat extends Componet {
  constructor(props) {
    super(props)
  }
}

render() {
  return (
    <div>
      <KittenSpawn/>
      <KittenArmy/>
    </div>
  )
}
