/**
 * Amin MOHAMED
 * Version 1.0
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card } from '.';
import '../css/Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
    };
  }

  componentDidMount() {
    this.props.service
      .fetchAll()
      .then((persons) => this.setState({ models: persons }))
      .catch(console.error);
  }

  render() {
    return (
      // relative necessary to make sticky work
      <div className="Gallery relative fill-parent flex center column wrap">
        {this.buildActions()}
        {this.buildGallery()}
      </div>
    );
  }

  buildGallery() {
    return (
      <div className="items parent-width flex center wrap">
        {this.display(this.state.models)}
      </div>
    );
  }

  buildActions() {
    return (
      <div className="actions sticky top parent-width flex center">
        {this.create()}
      </div>
    );
  }

  display(models) {
    return models.map((model) => {
      return (
        <Card
          key={model.id}
          model={model}
          action={this.props.action}
          service={this.props.service}
        />
      );
    });
  }

  create = () => {
    return (
      <button
        className="create flex center"
        onClick={this.props.action.CREATE}
      >
        Create
      </button>
    );
  };
}

Card.propTypes = {
  action: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
};

export default Gallery;
