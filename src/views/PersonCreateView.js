/**
 * Amin MOHAMED
 * Version 1.0
 */
import { redirect } from 'react-router-dom';
import { PersonForm } from '../components';
import { MainLayout } from '../layouts';
import { Person } from '../models';
import { PersonService } from '../services';

/**
 *  page to create a person
 *
 * @returns
 */
const PersonCreateView = () => {
  return (
    <MainLayout>
      <PersonForm
        person={new Person()}
        method="post"
        action="/person/create"
        formLabel="Create a Person"
        actionLabel="Create"
      />
    </MainLayout>
  );
};

PersonCreateView.action = async ({ request }) => {
  const person = Object.fromEntries(await request.formData());
  await PersonService().create(person);
  return redirect('/');
};

export default PersonCreateView;
