import { render, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  const mockProps = {
    text: 'Mock button copy'
  };

  let element;

  beforeEach(() => {
    render(
      <Button {...mockProps} />
    );

    element = screen.getByText(mockProps.text, { selector: 'button' });
  });

  it('renders text', () => {
    expect(element).toBeInTheDocument();
  });
});
