import { HTTP } from '.';

class API {
  constructor(url) {
    this.url = url;
  }

  static build = (url) => {
    return new API(url);
  };

  post = ({ body, headers }) => {
    return HTTP.post(this.url, body, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  };
  fetchOne = ({ target, headers }) => {
    return HTTP.get(`${this.url}/${target}`, {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  };
  fetchAll = ({ headers } = {}) => {
    return HTTP.get(this.url, {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  };
  update = ({ body, headers }) => {
    return HTTP.put(this.url, body, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  };
  delete = ({ target, headers }) => {
    return HTTP.delete(`${this.url}/${target}`, {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  };
}

// flex
export default API.build;
