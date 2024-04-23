import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contact}>
      <h2 className={css.name}>
        <FaUser />
        {contact.name}
      </h2>
      <p className={css.number}>
        <FaPhone />
        {contact.number}
      </p>
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
