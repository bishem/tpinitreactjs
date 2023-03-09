/**
 * Amin MOHAMED
 * Version 1.0
 */
import { useState } from 'react';
import { Person } from '../models';

/**
 * hook to manage the person being modified
 *
 * @returns
 */
const useUnderModification = () => {
  const [person, setPerson] = useState(new Person());

  return { person, setPerson };
};

export default useUnderModification;
