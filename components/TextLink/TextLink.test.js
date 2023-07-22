import { render, screen } from '@testing-library/react';
import TextLink from './TextLink';
import '@testing-library/jest-dom';

describe('TextLink', () => {
  const mockProps = {
    href: '/mock/route',
    text: 'Hello world'
  };

  let element;

  beforeEach(() => {
    render(
      <TextLink {...mockProps} />
    );

    element = screen.getByRole('link');
  });

  it('renders a href attribute', () => {
    expect(element).toHaveAttribute('href', mockProps.href);
  });

  it('renders text', () => {
    expect(element).toHaveTextContent(mockProps.text);
  });
});
