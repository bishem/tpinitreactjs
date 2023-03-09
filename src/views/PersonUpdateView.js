/**
 * Amin MOHAMED
 * Version 1.0
 */
import { redirect, useLoaderData } from 'react-router-dom';
import { PersonForm } from '../components';
import { MainLayout } from '../layouts';
import { PersonService } from '../services';

/**
 * page to update a person
 *
 * @returns
 */
const PersonUpdateView = () => {
  const person = useLoaderData();

  return (
    <MainLayout>
      <PersonForm
        person={person}
        method="put"
        formLabel="Update a Person"
        action={`/person/update/${person.id}`}
        actionLabel="Update"
      />
    </MainLayout>
  );
};

PersonUpdateView.loader = async ({ params }) => {
  return await PersonService().fetchOne(params.id);
};

PersonUpdateView.action = async ({ request, params }) => {
  const person = await PersonService().fetchOne(params.id);
  const altered = Object.assign(
    person,
    Object.fromEntries(await request.formData())
  );

  await PersonService().update(altered);

  return redirect('/');
};

export default PersonUpdateView;
