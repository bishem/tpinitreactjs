/**
 * Amin MOHAMED
 * Version 1.0
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Person } from '../classes';
import { PersonService } from '../services';

class Form extends Component {
  constructor(props) {
    super(props);
    this.personService = new PersonService();
    this.state = {
      model: new Person({}),
      update: false,
    };
  }

  componentDidMount() {
    if (this.props.model) {
      this.setState({ model: this.props.model, update: true });
    }
  }
  render() {
    return <div className="form ">{this.buildForm()};</div>;
  }

  buildForm = () => {
    return (
      <form onSubmit={this.process}>
        {this.buildFields()}
        {this.buildButtons()}
      </form>
    );
  };

  buildFields = () => {
    return Object.keys(this.state.model).map((key) => {
      return (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input
            type="text"
            id={key}
            value={this.state.model[key]}
          />
        </div>
      );
    });
  };

  buildButtons = () => {
    return (
      <>
        <input type="cancel">Cancel</input>
        <input type="submit">Save</input>
      </>
    );
  };

  process = (event) => {
    event.preventDefault();
    if (this.state.update) this.update();
    else this.create();
  };

  update = () => {
    this.personService
      .update(this.state.model)
      .then(this.props.action.READ)
      .catch(console.error);
  };

  create = () => {
    this.personService
      .create(this.state.model)
      .then(this.props.action.READ)
      .catch(console.error);
  };
}

Form.propTypes = {
  model: PropTypes.object,
  action: PropTypes.object.isRequired,
};

export default Form;
