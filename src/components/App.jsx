import { useState, useEffect } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchBox from '../components/searchBox/SearchBox';
import contacts from "../contact.json";

const App = () => {
  const [contactList, setContactList] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : contacts;
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactList)); 
  }, [contactList]);

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const addContact = newContact => {
    setContactList([...contactList, newContact]);
  };
  
  const deleteContact = id => {
    setContactList(contactList.filter(contact => contact.id !== id));
  };

  const filteredContacts = contactList.filter(contact => 
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
