/**
 * Amin MOHAMED
 * Version 1.0
 */
import Api from './api.service';

/**
 * service to manage persons
 */
class PersonService {
  /** @type {PersonService} */
  static instance = null;

  #api = new Api('person');

  static build = () => {
    if (!this.instance) {
      this.instance = new PersonService();
    }
    return this.instance;
  };

  create(person) {
    return this.#api.post(person);
  }

  fetchAll() {
    return this.#api.fetchAll();
  }

  fetchOne(id) {
    return this.#api.fetchAt(id);
  }

  update(person) {
    return this.#api.updateAt({ target: person.id, body: person });
  }

  delete(id) {
    return this.#api.delete(id);
  }
}

// pseudo implementation of singleton pattern
export default PersonService.build;
