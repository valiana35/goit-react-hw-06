import { FaUser, FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch({
          type: "contacts/deleteContact",
          payload: id,
        });
      };

    return (
        <div className={css.contact}>
            <h2 className={css.name}><FaUser />{name}</h2>
            <p className={css.number}><FaPhone />{number}</p>
            <button className={css.deleteBtn} onClick={handleDeleteContact}>Delete</button>
        </div>
    );
}

export default Contact;