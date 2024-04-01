const Contact = ({ contact, onDeleteContact }) => {
    const handleClick = () => {
      onDeleteContact(contact.id);
    };
  
    return (
      <li>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
        <button onClick={handleClick}>Delete</button>
      </li>
    );
  };
  
  export default Contact;