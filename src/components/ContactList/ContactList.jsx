import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from '../../redux/tasks/selectors';
import { fetchContacts } from 'redux/tasks/operations';
import { Contact } from './Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <p>Request in progress...</p>}
      {error && <p>Warning! {error}</p>}
      {filteredContacts.map(elem => (
        <li key={elem.id} className={css.element}>
          <Contact name={elem.name} phone={elem.number} id={elem.id} />
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
