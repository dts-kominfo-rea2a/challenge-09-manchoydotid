// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  return (
    <div className="container">
      <div className="contact" key={data.phone}>
        <div className="contact_image">
          <img src={data.photo} alt={data.name} />
        </div>
        <div className="contact_content">
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
