import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((contact, key) => (
        <Contact key={key} data={contact} />
      ))}
    </div>
  );
};

export default App;
