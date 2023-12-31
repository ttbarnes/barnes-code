import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card
        alt='Engineering'
        icon='/engineering.svg'
        largeImage='/engineering.jpg'
        title='Engineering'
      >
        <p>Children text</p>
      </Card>
    );

    const mainImage = screen.getByRole('img', { name: /engineering image/i });
    const icon = screen.getByRole('img', { name: /engineering icon/i });
    const title = screen.getByRole('heading', { name: /engineering/i });
    const text = screen.getByText(/children text/i);

    expect(mainImage).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
