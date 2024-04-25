import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
