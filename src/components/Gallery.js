/**
 * Amin MOHAMED
 * Version 1.0
 */
import React, { Component } from 'react';
import Card from './Card';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  render() {
    return (
      <div className="Gallery fill-parent flex center wrap">
        {this.state.list.map((item, index) => {
          return (
            <Card
              key={item}
              object={item}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
