const Contact = ({ contact, onDeleteContact }) => {
    const handleClick = () => {
      onDeleteContact(contact.id);
    };
  
    return (
      <li className="contact">
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <button className="contact-delete" onClick={handleClick}>Delete</button>
      </li>
    );
  };
  
  export default Contact;