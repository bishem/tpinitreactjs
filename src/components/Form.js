/**
 * Amin MOHAMED
 * Version 1.0
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Person } from '../classes';
import '../css/Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: new Person({}), //empty person
      update: false,
      title: 'Add a Person',
    };
  }

  componentDidMount() {
    if (this.props.update) {
      this.setState({
        model: this.props.model,
        update: true,
        title: 'Update a Person',
      });
    }
  }

  render() {
    return (
      <div className="Form fill-parent flex column items-center">
        <h1 className="title flex align-center center parent-width">
          {this.state.title}
        </h1>
        {this.buildForm()}
      </div>
    );
  }

  buildForm = () => {
    return (
      <form
        onSubmit={this.process}
        className="flex column items-center parent-width"
      >
        {this.buildFields()}
        {this.buildActions()}
      </form>
    );
  };

  buildFields = () => {
    return (
      <div className="fields parent-width flex column center">
        {Object.entries(this.state.model)
          .filter(([property]) => property !== 'id')
          .map(this.buildField)}
      </div>
    );
  };

  buildField = ([property, value]) => {
    return (
      <label
        key={property}
        htmlFor={property}
        className="field flex column parent-width"
      >
        {property}
        <input
          id={property}
          type="text"
          value={value}
          className="parent-width"
          onChange={(event) => this.refresh(property, event)}
        />
      </label>
    );
  };

  buildActions = () => {
    return (
      <div className="actions flex parent-width center">
        <input
          type="submit"
          value="Save"
          className="save flex center"
        />
        <input
          type="reset"
          value="reset"
          onClick={this.props.action.READ}
          className="reset flex center"
        />
      </div>
    );
  };

  refresh(property, event) {
    event.preventDefault();
    this.setState({
      model: {
        ...this.state.model,
        [property]: event.target.value,
      },
    });
  }

  process = (event) => {
    event.preventDefault();
    if (this.state.update) this.update();
    else this.create();
  };

  update = () => {
    this.props.service
      .update(this.state.model)
      .then(this.props.action.READ)
      .catch(console.error);
  };

  create = () => {
    this.props.service
      .create(this.state.model)
      .then(this.props.action.READ)
      .catch(console.error);
  };
}

Form.propTypes = {
  model: PropTypes.object,
  action: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
};

export default Form;
