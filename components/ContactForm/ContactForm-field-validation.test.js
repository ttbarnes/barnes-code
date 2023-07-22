import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';
import { FIELD_IDS } from '../../constants';
import { FIELDS } from '../../content-strings';
import { getSubmitButton } from '../../test-helpers';

const { EMAIL, SUBJECT, MESSAGE } = FIELDS;

describe('ContactForm', () => {
  describe('when all fields are empty and the form is submitted', () => {
    it('should render a validation error for every field', async () => {
      render(<ContactForm submittedValues={{}} />);

      const submitButton = getSubmitButton();
      fireEvent.submit(submitButton);

      await waitFor(() => {
        const emailAddressErrorMessage = screen.queryByText(EMAIL.ERRORS.IS_EMPTY);
        expect(emailAddressErrorMessage).toBeInTheDocument();

        const subjectErrorMessage = screen.queryByText(SUBJECT.ERRORS.DEFAULT);
        expect(subjectErrorMessage).toBeInTheDocument();

        const messageErrorMessage = screen.queryByText(MESSAGE.ERRORS.DEFAULT);
        expect(messageErrorMessage).toBeInTheDocument();
      });
    });
  });

  describe(`${FIELD_IDS.EMAIL} field`, () => {
    describe('when there is no @ symbol', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.EMAIL]: 'test@'
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const emailAddressErrorMessage = screen.queryByText(EMAIL.ERRORS.DEFAULT);

          expect(emailAddressErrorMessage).toBeInTheDocument();
        });
      });
    });

    describe('when there is no top level domain', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.EMAIL]: 'test@testing'
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const emailAddressErrorMessage = screen.queryByText(EMAIL.ERRORS.DEFAULT);

          expect(emailAddressErrorMessage).toBeInTheDocument();
        });
      });
    });

    describe('when there is an @ symbol and top level domain, but invalid structure', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.EMAIL]: '@.com'
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const emailAddressErrorMessage = screen.queryByText(EMAIL.ERRORS.DEFAULT);

          expect(emailAddressErrorMessage).toBeInTheDocument();
        });
      });
    });
  });

  describe(`${FIELD_IDS.SUBJECT} field`, () => {
    describe('when there are less than 5 characters', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.SUBJECT]: 'a'.repeat(4)
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const subjectErrorMessage = screen.queryByText(SUBJECT.ERRORS.IS_BELOW_MINIMUM);

          expect(subjectErrorMessage).toBeInTheDocument();
        });
      });
    });

    describe('when there more than 30 characters', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.SUBJECT]: 'a'.repeat(31)
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const subjectErrorMessage = screen.queryByText(SUBJECT.ERRORS.IS_ABOVE_MAXIMUM);

          expect(subjectErrorMessage).toBeInTheDocument();
        });
      });
    });
  });

  describe(`${FIELD_IDS.MESSAGE} field`, () => {
    describe('when there are less than 10 characters', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.MESSAGE]: 'a'.repeat(9)
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const messageErrorMessage = screen.queryByText(MESSAGE.ERRORS.IS_BELOW_MINIMUM);

          expect(messageErrorMessage).toBeInTheDocument();
        });
      });
    });

    describe('when there more than 200 characters', () => {
      it('should render a validation error', async () => {
        render(
          <ContactForm
            submittedValues={{
              [FIELD_IDS.MESSAGE]: 'a'.repeat(201)
            }}
          />
        );

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const messageErrorMessage = screen.queryByText(MESSAGE.ERRORS.IS_ABOVE_MAXIMUM);

          expect(messageErrorMessage).toBeInTheDocument();
        });
      });
    });
  });
});
