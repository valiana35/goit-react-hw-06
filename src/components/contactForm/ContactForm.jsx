import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';

const FeedBackSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
});

const initialContacts = {
    name: "",
    number: "",
};


const ContactForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const numberField = useId();

    const handleSubmit = (values, actions, evt) => {
        evt.preventDefault();
        const newContact = {
            ...values,
            id: nanoid(),
            name: values.name.trim(),
            number: values.number
        };
        dispatch({
            type: "contacts/addContact",
            payload: newContact,
          })
        actions.resetForm();
    };

    return (
        <Formik
           initialValues={initialContacts}
           onSubmit={handleSubmit}
           validationSchema={FeedBackSchema}
           >
            <Form className={css.form}>
                <div className={css.formItem}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field className={css.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="userName" as="span" />
                </div>
                <div className={css.formItem}>
                    <label htmlFor={numberField}>Number</label>
                    <Field className={css.input} type="string" name="number" id={numberField} />
                    <ErrorMessage name="number" as="span" />
                </div>
                <button className={css.formBtn} type="submit">Add contact</button>
            </Form>
           </Formik>
    );
}

export default ContactForm;