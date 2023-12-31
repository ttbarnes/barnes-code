import { render, screen } from '@testing-library/react';
import { ROUTES } from '../../constants';
import ContactPanel from './ContactPanel';
import '@testing-library/jest-dom';

describe('ContactPanel', () => {
  describe('when the type is `text`', () => {
    beforeEach(() => {
      render(
        <ContactPanel  />
      );
    });

    it('renders a heading', () => {
      const heading = screen.getByText(/Let's create something/i);

      expect(heading).toBeInTheDocument();

      const headingSpan = screen.getByText(/together/i);

      expect(headingSpan).toBeInTheDocument();
    });

    it('renders body text', () => {
      const body = screen.getByText(/We're always happy to talk./i);

      expect(body).toBeInTheDocument();
    });

    it('renders a link to the contact form', () => {
      const link = screen.getByRole('link', { name: 'Get in touch' });

      expect(link).toBeInTheDocument();

      expect(link).toHaveAttribute('href', ROUTES.CONTACT);
    });
  });
});
