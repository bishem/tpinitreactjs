/**
 * Amin MOHAMED
 * Version 1.0
 */
import { useNavigate } from 'react-router-dom';
import { PersonService } from '../services';
import '../styles/PersonCard.css';

/**
 *
 * @param {{person: Person}} props
 * @returns
 */
const Card = ({ person }) => {
  const navigate = useNavigate();

  const deletePerson = () => {
    PersonService().delete(person.id);

    navigate('/');
  };

  const updatePerson = () => navigate(`/person/update/${person.id}`);

  return (
    <div className="person-card flex column center parent-widht">
      <div className="person-infos flex column center fill-parent">
        <p>
          <span className="label">Nom:</span>
          <span className="value">{person.nom}</span>
        </p>
        <p>
          <span className="label">Prenom:</span>
          <span className="value">{person.prenom}</span>
        </p>
        <p>
          <span className="label">Adresse:</span>
          <span className="value">{person.adresse}</span>
        </p>
        <p>
          <span className="label">Code Postal:</span>
          <span className="value">{person.codePostal}</span>
        </p>
        <p>
          <span className="label">Age:</span>
          <span className="value">{person.age}</span>
        </p>
      </div>

      <div className="card-actions flex content-evenly parent-width">
        <button
          className="update flex center"
          onClick={updatePerson}
        >
          Update
        </button>
        <button
          className="delete flex center"
          onClick={deletePerson}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
