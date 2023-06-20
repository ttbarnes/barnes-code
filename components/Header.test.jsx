import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header />);

    const logo = screen.getByRole('img', { name: /barnes code logo/i });

    expect(logo).toBeInTheDocument();
  });
});
