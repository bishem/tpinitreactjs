/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import { unbox } from '../classes';
import '../css/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: this.props.object,
    };
  }
  render() {
    return (
      <div className="Card flex column center ">{unbox(this.state.object)}</div>
    );
  }
}

export default Card;
