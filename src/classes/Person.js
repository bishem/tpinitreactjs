/**
 * Amin MOHAMED
 * Version 1.0
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

const PEOPLE = [
  new Person({
    id: 1,
    nom: 'Doumbia',
    prenom: 'ramata',
    adresse: 'Rue de la paix',
    codePostal: '75000',
    age: 18,
  }),
  new Person({
    id: 2,
    nom: 'solomon',
    prenom: 'kouadio',
    adresse: 'Rue de la paix',
    codePostal: '75000',
    age: 20,
  }),
  new Person({
    id: 3,
    nom: 'mohamed',
    prenom: 'amin',
    adresse: 'Rue de la paix',
    codePostal: '75000',
    age: 30,
  }),
];

export default Person;

export { PEOPLE };
