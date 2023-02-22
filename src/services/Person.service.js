/**
 * Amin MOHAMED
 * Version 1.0
 */
import { API } from '.';

const ENDPOINT = 'person';

class PersonService {
  create(person) {
    return API.post({ endpoint: ENDPOINT, body: person });
  }

  fetchAll() {
    return API.fetchAll({ endpoint: ENDPOINT });
  }

  fetchOne(target) {
    return API.fetchOne({ endpoint: ENDPOINT, target });
  }

  update(person) {
    return API.update({ endpoint: ENDPOINT, body: person });
  }

  delete(target) {
    return API.delete({ endpoint: ENDPOINT, target });
  }
}

export default PersonService;
