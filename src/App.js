import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  const [contact, setContact] = useState(contacts);
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact contacts={contact} />
    </div>
  );
};

export default App;
