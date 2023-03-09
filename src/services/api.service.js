/**
 * Amin MOHAMED
 * Version 1.0
 */
import HTTP from './http.client';

/**
 * used to create a new service by reducing the boilerplate code
 * and redefining provided methods to fit the needs of said service
 */
class Api {
  #resource = '';

  constructor(resource) {
    this.#resource = resource;
  }

  fetchAll = ({ params, headers } = {}) => {
    return HTTP.get(this.#resource, { params, headers });
  };

  fetchAt = (target, { params, headers } = {}) => {
    return HTTP.get(`${this.#resource}/${target}`, { params, headers });
  };

  post = (body, { params, headers } = {}) => {
    return HTTP.post(this.#resource, body, { params, headers });
  };

  postAt = ({ target, body }, { params, headers } = {}) => {
    return HTTP.post(`${this.#resource}/${target}`, body, { params, headers });
  };

  update = (body, { params, headers } = {}) => {
    return HTTP.put(this.#resource, body, { params, headers });
  };

  updateAt = ({ target, body }, { params, headers } = {}) => {
    return HTTP.put(`${this.#resource}/${target}`, body, { params, headers });
  };

  delete = (target, { params, headers } = {}) => {
    return HTTP.delete(`${this.#resource}/${target}`, { params, headers });
  };

  deleteAt = (target, { params, headers } = {}) => {
    return HTTP.delete(`${this.#resource}/${target}`, { params, headers });
  };

  get resource() {
    return this.#resource;
  }
}

export default Api;
