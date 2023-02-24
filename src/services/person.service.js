/**
 * Amin MOHAMED
 * Version 1.0
 */

import { API } from '.';

const url = 'person';

function Name() {}

class PersonService {
  constructor() {
    this.api = API(url);
  }

  static instance = null;

  static build = () => {
    if (!this.instance) {
      this.instance = new PersonService();
    }
    return this.instance;
  };

  create(body) {
    return this.api.post({ body });
  }

  fetchAll() {
    return this.api.fetchAll();
  }

  fetchOne(target) {
    return this.api.fetchOne({ target });
  }

  update(body) {
    return this.api.update({ body });
  }

  delete(target) {
    return this.api.delete({ target });
  }
}

// pseudo implementation of singleton pattern
export default PersonService.build;
