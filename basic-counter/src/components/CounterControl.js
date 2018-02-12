import React, { Component } from 'react';

const counterControl = (props) => (
    <button onClick={props.onClicked}>{props.title}</button>
)

export default counterControl
