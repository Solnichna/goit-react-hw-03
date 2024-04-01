import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
