/**
 * Amin MOHAMED
 * Version 1.0
 */
import { Link } from 'react-router-dom';
import '../styles/PersonList.css';
import PersonCard from './PersonCard';

/**
 *
 * @param {{persons: Person[]}} props
 * @returns
 */
const PersonList = ({ persons }) => {
  return (
    <div className="person-list relative fill-parent flex column  center">
      <div className="person-cards parent-width flex center push-floors wrap">
        {persons.map(toPersonCard)}
      </div>
      <div className="list-actions sticky bottom parent-width flex center">
        <button className="person-create flex center">
          <Link to="/person/create">Create</Link>
        </button>
      </div>
    </div>
  );
};

export default PersonList;

function toPersonCard(person) {
  return (
    <PersonCard
      key={person.id}
      person={person}
    />
  );
}
