import { screen } from '@testing-library/react';

export const getSubmitButton = () => {
  const element = screen.getByRole('button');

  return element;
};
