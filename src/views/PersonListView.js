/**
 * Amin MOHAMED
 * Version 1.0
 */
import { useLoaderData } from 'react-router-dom';
import { PersonList } from '../components';
import { MainLayout } from '../layouts';
import { PersonService } from '../services';

/**
 * page to list all persons
 *
 * @returns
 */
const PersonListView = () => {
  const persons = useLoaderData();
  return (
    <MainLayout>
      <PersonList persons={persons} />
    </MainLayout>
  );
};

PersonListView.loader = async () => {
  return await PersonService().fetchAll();
};

export default PersonListView;
