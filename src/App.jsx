import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import "./App.css";
import { useState } from "react";

function App() {
const [searchValue, setsearchValue] = useState("");

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchValue} onSearch={setsearchValue} />
      <ContactList />
    </div>
  );
}

export default App;
