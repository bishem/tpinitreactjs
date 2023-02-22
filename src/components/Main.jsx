/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import { Form, Gallery } from '.';
import { PersonService } from '../services';

class Main extends Component {
  constructor() {
    super();
    this.personService = new PersonService();
    this.state = {
      content: <div>Loading...</div>,
      loading: true,
    };
  }

  componentDidMount() {
    this.action.READ();
  }

  render() {
    return (
      // need parent to be flex for this to work
      <main className="Main grow flex center">{this.state.content}</main>
    );
  }

  action = Object.freeze({
    READ: () =>
      this.setState({
        loading: true,
        content: (
          <Gallery
            action={this.action}
            service={this.personService}
          />
        ),
      }),
    CREATE: () =>
      this.setState({
        loading: true,
        content: (
          <Form
            action={this.action}
            service={this.personService}
          />
        ),
      }),
    UPDATE: (data) =>
      this.setState({
        loading: true,
        content: (
          <Form
            model={data}
            action={this.action}
            service={this.personService}
          />
        ),
      }),
    DELETE: () => this.action.READ(),
  });
}

export default Main;
