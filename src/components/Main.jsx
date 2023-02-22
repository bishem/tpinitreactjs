/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import { Form, Gallery } from '.';
import '../css/Main.css';
import { PersonService } from '../services';

class Main extends Component {
  constructor() {
    super();
    this.personService = PersonService();
    this.state = { content: <div>Loading...</div> };
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
        content: (
          <Gallery
            action={this.action}
            service={this.personService}
          />
        ),
      }),
    CREATE: () =>
      this.setState({
        content: (
          <Form
            action={this.action}
            service={this.personService}
          />
        ),
      }),
    UPDATE: (data) =>
      this.setState({
        content: (
          <Form
            model={data}
            update={true}
            action={this.action}
            service={this.personService}
          />
        ),
      }),
    REFRESH: () =>
      // setting content to loading allows react to detect the change and re-render
      this.setState({ content: <div>Loading...</div> }, this.action.READ),
  });
}

export default Main;
