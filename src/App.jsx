import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import './App.css'
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  const handleAddContact = (contact) => {
    const action = {
      type: 'contacts/addContact',
      payload: contact,
    };
    dispatch(action);
  }

  const handleDeleteContact = (id) => {
    const action = {
      type: 'contacts/deleteContact',
      payload: id,
    };
    dispatch(action);
  }

  const [searchValue, setsearchValue] = useState("");

  return (  
      <div>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onAdd = {handleAddContact} />
        <SearchBox value={searchValue} onSearch={setsearchValue}/>
        <ContactList onDelete={handleDeleteContact}/>
      </div>
  );
}

export default App
