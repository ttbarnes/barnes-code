import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { FIELD_IDS } from '../../constants';
import { API_GENERIC_ERROR_MESSAGE, FIELDS } from '../../content-strings';
import Form from '../Form';
import FormField from '../FormField';
import InlineErrorMessage from '../InlineErrorMessage';
import Button from '../Button';
import SCHEMA from '../../form-validation/contact';

const { EMAIL, SUBJECT, MESSAGE } = FIELDS;

const ContactForm = ({ submittedValues }) => {
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    resolver: joiResolver(SCHEMA),
    defaultValues: {}
  });

  const handleOnSubmit = async (ev) => {
    ev.preventDefault();

    const fieldValues = {
      email: getValues(FIELD_IDS.EMAIL),
      subject: getValues(FIELD_IDS.SUBJECT),
      message: getValues(FIELD_IDS.MESSAGE)
    };

    handleSubmit(async () => {
      console.info('Contact form submission - checking for errors');

      const hasErrors = Object.keys(errors).length;

      if (!hasErrors) {
        console.info('Contact form submission - no errors found - posting to Netlify Forms');

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify(fieldValues)
        })
          .then(() => {
            console.info('Contact form successfully submitted');

            setSuccess(true);
          })
          .catch((err) => {
            console.error('Error submitting contact form ', err);

            setApiError(true);
          });
      }
    })(ev);
  };

  return (
    <>
      {success && (
        <div role='alert'>
          Success!
        </div>
      )}

      {apiError && (
        <InlineErrorMessage
          text={API_GENERIC_ERROR_MESSAGE}
          id='api-error'
        />
      )}

      <Form
        onSubmit={handleOnSubmit}
        name='Contact'
      >
        <FormField
          id={FIELD_IDS.EMAIL}
          type='email'
          label={EMAIL.LABEL}
          register={register}
          validationError={errors.email?.message}
          defaultValue={submittedValues?.[FIELD_IDS.EMAIL]}
        />

        <FormField
          id={FIELD_IDS.SUBJECT}
          type='text'
          label={SUBJECT.LABEL}
          register={register}
          validationError={errors.subject?.message}
          defaultValue={submittedValues?.[FIELD_IDS.SUBJECT]}
        />

        <FormField
          id={FIELD_IDS.MESSAGE}
          type='textarea'
          label={MESSAGE.LABEL}
          register={register}
          validationError={errors.message?.message}
          defaultValue={submittedValues?.[FIELD_IDS.MESSAGE]}
        />

        <Button text='Send a message' />

      </Form>
    </>
  );
};

ContactForm.propTypes = {
  submittedValues: PropTypes.shape({
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string
  })
};

ContactForm.defaultProps = {
  submittedValues: {}
};

export default ContactForm;
