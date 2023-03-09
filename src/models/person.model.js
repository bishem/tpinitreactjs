/**
 * Amin MOHAMED
 * Version 1.0
 */

/**
 * model of a person object stored in the database
 */
class Person {
  constructor(
    { id, nom, prenom, adresse, codePostal, age } = {
      id: 0,
      nom: '',
      prenom: '',
      adresse: '',
      codePostal: '',
      age: 18,
    }
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.codePostal = codePostal;
    this.age = age;
  }
}

export default Person;
