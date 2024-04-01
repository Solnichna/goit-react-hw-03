
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),
    number: Yup.string()
      .required('Number is required')
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="contact-form">
        <div>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <Field type="text" name="number" placeholder="Number" />
          <ErrorMessage name="number" component="div" className="error-form"/>
        </div>
        <button type="submit" className="button-add-contact">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

