import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);

    const logo = screen.getByRole('img', { name: /barnes code footer logo/i });
    const copy = screen.getByText(/© barnes code ltd\. company no: 09719405/i);

    expect(logo).toBeInTheDocument();
    expect(copy).toBeInTheDocument();
  });
});
