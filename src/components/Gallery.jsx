/**
 * Amin MOHAMED
 * Version 1.0
 */
import { PersonService } from '@/services';
import { useLoaderData } from 'react-router-dom';
import { Card } from '.';
import '../css/Gallery.css';

const Gallery = () => {
  const { models } = useLoaderData();

  this.display = function () {
    return (
      <div className="items parent-width flex center wrap">
        {models.map((model) => {
          return (
            <Card
              key={model.id}
              model={model}
              action={this.props.action}
              service={this.props.service}
            />
          );
        })}
      </div>
    );
  };

  this.create = function () {
    return (
      <button
        className="create flex center"
        onClick={this.props.action.CREATE}
      >
        Create
      </button>
    );
  };

  this.buildActions = function () {
    return (
      <div className="actions sticky top parent-width flex center">
        {this.create()}
      </div>
    );
  };

  this.buildGallery = function () {
    return (
      <div className="content grow parent-width flex center">
        {this.display()}
      </div>
    );
  };

  return (
    // relative necessary to make sticky work
    <div className="Gallery relative fill-parent flex center column wrap">
      {this.buildActions()}
      {this.buildGallery()}
    </div>
  );
};

Gallery.loader = () => {
  return PersonService().fetchAll();
};

export default Gallery;
