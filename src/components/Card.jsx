/**
 * Amin MOHAMED
 * Version 1.0
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/Card.css';
import { unbox } from '../utils';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.model,
    };
  }

  render() {
    return (
      <div className="Card flex column center parent-widht">
        {this.buildCard()}
        {this.buildActions()}
      </div>
    );
  }

  buildCard = () => {
    return (
      <div className="content flex column center fill-parent">
        {unbox(this.state.model)}
      </div>
    );
  };

  buildActions = () => {
    return (
      <div className="actions flex space-evenly parent-widht">
        {this.update()}
        {this.delete()}
      </div>
    );
  };

  delete() {
    return (
      <button
        className="delete flex center"
        onClick={() => this.props.action.DELETE(this.state.model.id)}
      >
        delete
      </button>
    );
  }

  update() {
    return (
      <button
        className="update flex center"
        onClick={() => this.props.action.UPDATE(this.state.model)}
      >
        update
      </button>
    );
  }
}

Card.propTypes = {
  model: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
};

export default Card;
