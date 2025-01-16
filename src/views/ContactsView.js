import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContacts, getIsLoading } from '../redux/contacts';
import styles from '../App.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.title_Phonebook}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title_Contacts}>Contacts</h2>
        <Filter />
        {isLoading && <h1>Loading...</h1>}
        <ContactList />
      </div>
    </Container>
  );
}
