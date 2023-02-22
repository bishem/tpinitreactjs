/**
 * Amin MOHAMED
 * Version 1.0
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Person } from '../classes';

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
    return Object.entries(this.state.model)
      .filter(([key]) => key !== 'id')
      .map(this.buildField);
  };

  buildButtons = () => {
    return (
      <>
        <input
          type="reset"
          value="reset"
        />
        <input
          type="submit"
          value="Save"
        />
      </>
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

  buildField = (entry) => {
    const property = entry[0];
    const value = entry[1];

    return (
      <div key={property}>
        <label htmlFor={property}>{property}</label>
        <input
          id={property}
          type="text"
          value={value}
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
