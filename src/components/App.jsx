import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './ContactList/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

import { getAllNames } from '../redux/selectors';

import css from './app.module.css';

export default function App() {
  const contacts = useSelector(getAllNames);
  const length = contacts.length;

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      {length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Notification message="There is no contacts in the Phonebook" />
      )}
    </div>
  );
}
