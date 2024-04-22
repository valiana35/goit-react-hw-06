import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ onDelete }) => {
  const contacts = useSelector((state) => state.contacts);

  if (contacts.length) {
    return (
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default ContactList;
