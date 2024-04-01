import { useState, useEffect } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchBox from '../components/searchBox/SearchBox';
import { nanoid } from 'nanoid';
import contact from "../contact.json";

const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchTerm={searchTerm} handleSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
