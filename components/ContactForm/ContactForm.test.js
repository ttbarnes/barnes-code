import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as _nextRouter from 'next/router';
import ContactForm from './ContactForm';
import { FIELD_IDS } from '../../constants';
import { API_GENERIC_ERROR_MESSAGE } from '../../content-strings';
import { getSubmitButton } from '../../test-helpers';

describe('ContactForm', () => {
  const nextRouter = _nextRouter;
  nextRouter.useRouter = jest.fn();

  const pushSpy = jest.fn();

  const mockRouter = {
    route: '/',
    push: jest.fn(pushSpy)
  };

  nextRouter.useRouter.mockImplementation(() => mockRouter);

  const mockProps = {
    submittedValues: {
      [FIELD_IDS.EMAIL]: 'mock@test.com'
    }
  };

  it(`renders an ${FIELD_IDS.EMAIL} field with attributes/props`, () => {
    render(<ContactForm {...mockProps} />);

    const field = screen.getByDisplayValue(mockProps.submittedValues[FIELD_IDS.EMAIL]);

    expect(field).toBeInTheDocument();

    expect(field.id).toEqual(FIELD_IDS.EMAIL);
    expect(field.type).toEqual('email');
    expect(field.validationError).toEqual(undefined);
    expect(field.value).toEqual(mockProps.submittedValues[FIELD_IDS.EMAIL]);
  });

  describe('form validation/submission', () => {
    describe('when all fields are empty and the form is submitted', () => {
      it('should NOT render a success alert', async () => {
        render(<ContactForm submittedValues={{}} />);

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const alert = screen.queryAllByRole('alert');
          expect(alert).toHaveLength(0);
        });
      });

      it('should NOT render a generic API validation error', async () => {
        render(<ContactForm submittedValues={{}} />);

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          const apiErrorMessage = screen.queryByText(API_GENERIC_ERROR_MESSAGE);

          expect(apiErrorMessage).toBeNull();
        });
      });
    });

    describe('when all fields are valid and the form is submitted', () => {
      let mockFetchCall;

      const validFormValues = {
        [FIELD_IDS.EMAIL]: 'mock@test.com',
        [FIELD_IDS.NAME]: 'Mock name',
        [FIELD_IDS.MESSAGE]: 'Hello world'
      };

      beforeEach(() => {
        jest.resetAllMocks();

        mockFetchCall = jest.fn().mockReturnValue(Promise.resolve({}));
 
        global.fetch = mockFetchCall;

        nextRouter.useRouter.mockImplementation(() => mockRouter);
      });

      afterEach(() => {
        jest.restoreAllMocks();
      });

      it('should call fetch with payload, headers and method', async () => {
        render(<ContactForm submittedValues={validFormValues} />);

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          expect(mockFetchCall).toHaveBeenCalledTimes(1);

          const expectedPayload = JSON.stringify(validFormValues);

          expect(mockFetchCall).toHaveBeenCalledWith(
            '/api/contact',
            {
              body: expectedPayload,
              headers: { 'Content-Type': 'application/json' },
              method: 'POST'
            }
          );
        });
      });

      it('should call router.push with /contact/thank-you', async () => {
        render(<ContactForm submittedValues={validFormValues} />);

        const submitButton = getSubmitButton();
        fireEvent.submit(submitButton);

        await waitFor(() => {
          expect(mockFetchCall).toHaveBeenCalledTimes(1);

          expect(mockRouter.push).toHaveBeenCalledTimes(1);
          expect(mockRouter.push).toHaveBeenCalledWith('/contact/thank-you');
        });
      });

      describe('when the fetch call is rejected', () => {
        beforeEach(() => {
          mockFetchCall = jest.fn().mockReturnValue(Promise.reject());

          global.fetch = mockFetchCall;
        });

        it('should render a generic API validation error', async () => {
          render(<ContactForm submittedValues={validFormValues} />);

          const submitButton = getSubmitButton();
          fireEvent.submit(submitButton);

          await waitFor(() => {
            const apiErrorMessage = screen.queryByText(API_GENERIC_ERROR_MESSAGE);

            expect(apiErrorMessage).toBeInTheDocument();
          });
        });
      });
    });
  });
});
