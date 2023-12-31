import { render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
  const mockProps = {
    onSubmit: jest.fn(),
    name: 'Get in touch'
  };

  beforeEach(() => {
    render(
      <Form {...mockProps}>
        <p>Mock child 1</p>
        <p>Mock child 2</p>
      </Form>
    );
  });

  it('renders a form with attributes', () => {
    const form = screen.getByLabelText(`${mockProps.name} form`);

    expect(form).toBeInTheDocument();

    expect(form.noValidate).toEqual(true);
  });

  it('renders text', () => {
    const child1 = screen.getByText('Mock child 1');
    expect(child1).toBeInTheDocument();

    const child2 = screen.getByText('Mock child 2');
    expect(child2).toBeInTheDocument();
  });
});
