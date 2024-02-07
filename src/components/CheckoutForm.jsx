import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

// RegEx for phone number validation
const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

// Schema for yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Names must have at least 2 characters')
    .max(100, "*Names can't be longer than 100 characters")
    .required('*Name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  phone: Yup.string()
    .matches(phoneRegExp, '*Phone number is not valid')
    .required('*Phone number required'),
});

const CheckoutForm = () => {
  return (
    <div
      className='container my-5 p-4 bg-light shadow'
      style={{ width: '20rem' }}
    >
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          localStorage.setItem('formData', JSON.stringify(values));
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} className='mx-auto'>
            <Form.Group controlId='formName' className='mb-3'>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Full Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={`form-control ${
                  touched.name && errors.name ? 'is-invalid' : ''
                }`}
                style={{ marginBottom: '1.5em' }}
              />
              {touched.name && errors.name ? (
                <div className='invalid-feedback'>{errors.name}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId='formEmail' className='mb-3'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='text'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={`form-control ${
                  touched.email && errors.email ? 'is-invalid' : ''
                }`}
                style={{ marginBottom: '1.5em' }}
              />
              {touched.email && errors.email ? (
                <div className='invalid-feedback'>{errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId='formPhone' className='mb-3'>
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type='text'
                name='phone'
                placeholder='Phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className={`form-control ${
                  touched.phone && errors.phone ? 'is-invalid' : ''
                }`}
                style={{ marginBottom: '1.5em' }}
              />
              {touched.phone && errors.phone ? (
                <div className='invalid-feedback'>{errors.phone}</div>
              ) : null}
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              disabled={isSubmitting}
              style={{ marginTop: '1em' }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
