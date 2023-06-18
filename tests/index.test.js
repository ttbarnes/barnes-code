import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText(/creative software engineering/i);

    expect(heading).toBeInTheDocument();
  });
});
