// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="contact" key={props.contact.phone}>
        <div className="contact_image">
          <img src={props.contact.photo} alt={props.contact.name} />
        </div>
        <div className="contact_content">
          <h1>{props.contact.name}</h1>
          <p>{props.contact.phone}</p>
          <p>{props.contact.email}</p>
        </div>
      </div>
      {/* ))}*/}
    </div>
  );
};

export default Contact;
