import { HTTP } from '.';

const API = Object.freeze({
  post: ({ endpoint, body, headers }) => {
    return HTTP.post(endpoint, body, {
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
  },
  fetchOne: ({ endpoint, target, headers }) => {
    return HTTP.get(`${endpoint}/${target}`, {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  },
  fetchAll: ({ endpoint, headers }) => {
    return HTTP.get(endpoint, {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  },
  update: ({ endpoint, body, headers }) => {
    return HTTP.put(endpoint, body, {
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
  },
  delete: ({ endpoint, target, headers }) => {
    return HTTP.delete(`${endpoint}/${target}`, {
      headers: {
        Accept: 'application/json',
        ...headers,
      },
    })
      .then((response) => {
        return response.data;
      })
      .catch(console.log);
  },
});

export default API;
