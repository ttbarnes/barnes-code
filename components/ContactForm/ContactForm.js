import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { FIELD_IDS } from '../../constants';
import { API_GENERIC_ERROR_MESSAGE, FIELDS } from '../../content-strings';
import Form from '../Form';
import FormField from '../FormField';
import InlineErrorMessage from '../InlineErrorMessage';
import Button from '../Button';
import SCHEMA from '../../form-validation/contact';

const { NAME, EMAIL, MESSAGE } = FIELDS;

const ContactForm = ({ submittedValues }) => {
  const router = useRouter();
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
      name: getValues(FIELD_IDS.NAME),
      message: getValues(FIELD_IDS.MESSAGE)
    };

    handleSubmit(async () => {
      console.info('✅ Contact form submission');

      const hasErrors = Object.keys(errors).length;

      if (!hasErrors) {
        console.info('✅ Contact form submission - calling API');

        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fieldValues)
          });

          router.push('/contact/thank-you');
        } catch (e) {
          console.error('Error submitting contact form ', e);

          setApiError(true);
        }
      }
    })(ev);
  };

  return (
    <>
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
          id={FIELD_IDS.NAME}
          type='text'
          label={NAME.LABEL}
          register={register}
          validationError={errors.name?.message}
          defaultValue={submittedValues?.[FIELD_IDS.NAME]}
        />

        <FormField
          id={FIELD_IDS.EMAIL}
          type='email'
          label={EMAIL.LABEL}
          register={register}
          validationError={errors.email?.message}
          defaultValue={submittedValues?.[FIELD_IDS.EMAIL]}
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
