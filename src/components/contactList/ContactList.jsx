import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContact.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
