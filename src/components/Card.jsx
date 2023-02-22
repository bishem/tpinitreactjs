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
      <div className="actions flex content-evenly parent-width">
        {this.buildUpdate()}
        {this.buildDelete()}
      </div>
    );
  };

  buildDelete() {
    return (
      <button
        className="delete flex center"
        onClick={this.delete}
      >
        delete
      </button>
    );
  }

  buildUpdate() {
    return (
      <button
        className="update flex center"
        onClick={this.update}
      >
        update
      </button>
    );
  }

  delete = () => {
    this.props.service
      .delete(this.state.model.id)
      .then(this.props.action.REFRESH)
      .catch(console.error);
  };

  update = () => this.props.action.UPDATE(this.state.model);
}

Card.propTypes = {
  model: PropTypes.object.isRequired,
  action: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
};

export default Card;
