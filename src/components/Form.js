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
    return (
      <div className="Form fill-parent flex content-center">
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
        {this.buildButtons()}
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

  buildButtons = () => {
    return (
      <div className="buttons flex parent-width items-center content-evenly">
        <input
          type="reset"
          value="reset"
        />
        <input
          type="submit"
          value="Save"
        />
      </div>
    );
  };

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

  buildField = ([property, value]) => {
    return (
      <div
        key={property}
        className="field parent-width flex content-between"
      >
        <label
          htmlFor={property}
          className="flex column parent-width"
        >
          {property}
          <input
            id={property}
            type="text"
            value={value}
            className="parent-width"
            onChange={(event) => {
              event.preventDefault();
              this.setState({
                model: {
                  ...this.state.model,
                  [property]: event.target.value,
                },
              });
            }}
          />
        </label>
      </div>
    );
  };
}

Form.propTypes = {
  model: PropTypes.object,
  action: PropTypes.object.isRequired,
  service: PropTypes.object.isRequired,
};

export default Form;
