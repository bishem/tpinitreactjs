/**
 * Amin MOHAMED
 * Version 1.0
 */
import { Form } from 'react-router-dom';
import '../styles/PersonForm.css';

/**
 *
 * @param {{
 *   person: string,
 *   method: string,
 *   action: string,
 *   actionLabel: string,
 *   formLabel: string
 * }} props
 * @returns
 */
const PersonForm = ({ person, method, action, actionLabel, formLabel }) => {
  return (
    <Form
      method={method}
      action={action}
      className="person-form flex center fill-parent"
    >
      <fieldset className="person-fields flex column parent-width center">
        <legend>{formLabel}</legend>
        <label htmlFor="nom">
          Nom:
          <input
            type="text"
            name="nom"
            defaultValue={person.nom}
          />
        </label>
        <label htmlFor=" prenom">
          Prénom:
          <input
            type="text"
            name="prenom"
            defaultValue={person.prenom}
          />
        </label>
        <label htmlFor="adress">
          Adresse:
          <input
            type="text"
            name="adresse"
            defaultValue={person.adresse}
          />
        </label>
        <label htmlFor="codePostal">
          Code Postal:
          <input
            type="text"
            name="codePostal"
            defaultValue={person.codePostal}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            name="age"
            defaultValue={person.age}
          />
        </label>
        <button type="submit">{actionLabel}</button>
      </fieldset>
    </Form>
  );
};

export default PersonForm;
