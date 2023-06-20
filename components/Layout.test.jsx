import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';
import '@testing-library/jest-dom';

describe('Layout', () => {
  it('renders correctly', () => {
    render(<Layout>Child Component</Layout>);

    const headerLogo = screen.getByRole('img', { name: /barnes code logo/i });
    const child = screen.getByText(/child Component/i);
    const footerLogo = screen.getByRole('img', {
      name: /barnes code footer logo/i,
    });

    expect(headerLogo).toBeInTheDocument();
    expect(child).toBeInTheDocument();
    expect(footerLogo).toBeInTheDocument();
  });
});
