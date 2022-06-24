// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="container">
      {props.contacts.map((contact) => (
        <div className="contact" key={contact.phone}>
          <div className="contact_image">
            <img src={contact.photo} alt={contact.name} />
          </div>
          <div className="contact_content">
            <h1>{contact.name}</h1>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
