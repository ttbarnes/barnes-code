import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CONTACT_EMAIL, FIELD_IDS } from '../../constants';
import { PAGES } from '../../content-strings';
import ContactPage from '.';

const {
  CONTACT: { PAGE_TITLE, INTRO }
} = PAGES;

describe('ContactPage', () => {
  const mockProps = {
    submittedValues: {
      [FIELD_IDS.EMAIL]: 'mock@test.com'
    }
  };

   beforeEach(() => {
     render(<ContactPage {...mockProps} />);
   });

  it('should render a page title', () => {
    const heading = screen.getByText(PAGE_TITLE);

    expect(heading).toBeInTheDocument();
  });

  describe('intro copy', () => {
    it('should render `more information` copy', () => {
      const heading = screen.getByText(INTRO.FOR_MORE_INFORMATION);

      expect(heading).toBeInTheDocument();
    });

    it('should render an email link', () => {
      const link = screen.getByRole('link');

      const expectedLink = `mailto:${CONTACT_EMAIL}`;

      expect(link).toHaveAttribute('href', expectedLink);
      expect(link).toHaveTextContent(CONTACT_EMAIL);
    });

    it('should render `alternatively` copy', () => {
      const heading = screen.getByText(INTRO.ALTERNATIVELY);

      expect(heading).toBeInTheDocument();
    });
  });

  it('should render a contact form', () => {
    const form = screen.getByLabelText('Contact form');

    expect(form).toBeInTheDocument();
  });
});
