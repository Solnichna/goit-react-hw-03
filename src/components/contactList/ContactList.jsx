import Contact from '../contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
