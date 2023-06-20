import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders with heading', () => {
    const heading = screen.getByText(/creative software engineering/i);

    expect(heading).toBeInTheDocument();
  });

  it('renders with scroll button', () => {
    const button = screen.getByRole('button', { name: /scroll arrow/i });

    expect(button).toBeInTheDocument();
  });

  it('renders with cards', () => {
    const cardOne = screen.getByRole('img', { name: /user research image/i });
    const cardTwo = screen.getByRole('img', { name: /engineering image/i });
    const cardThree = screen.getByRole('img', {
      name: /re\-platforming, modernization image/i,
    });

    expect(cardOne).toBeInTheDocument();
    expect(cardTwo).toBeInTheDocument();
    expect(cardThree).toBeInTheDocument();
  });
});
