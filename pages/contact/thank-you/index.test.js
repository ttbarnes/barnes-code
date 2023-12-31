import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PAGES } from '../../../content-strings';
import ContactThankYouPage from '.';

const {
  CONTACT_THANK_YOU: { PAGE_TITLE }
} = PAGES;

describe('ContactThankYouPage', () => {
  beforeEach(() => {
    render(<ContactThankYouPage />);
  });

  it('should render a page title', () => {
    const heading = screen.getByText(PAGE_TITLE);

    expect(heading).toBeInTheDocument();
  });

  it('should render `body` copy', () => {
    const body = screen.getByText(/We will respond as soon as possible./i);

    expect(body).toBeInTheDocument();
  });
});
