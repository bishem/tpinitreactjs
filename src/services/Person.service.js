/**
 * Amin MOHAMED
 * Version 1.0
 */
import { Person } from '../classes';

const URL = 'http://localhost:3001/persons';
class PersonService {
  create(person = new Person()) {
    return fetch(`${URL}`, {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  fetchAll() {
    return fetch(`${URL}`).then((response) => {
      return response.json();
    });
  }

  fetchOne(id) {
    return fetch(`${URL}/${id}`).then((response) => {
      return response.json();
    });
  }

  update(person = new Person()) {
    return fetch(`${URL}/${person.id}`, {
      method: 'PUT',
      body: JSON.stringify(person),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  delete(id) {
    return fetch(`${URL}/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      return response.json();
    });
  }
}

export default PersonService;
