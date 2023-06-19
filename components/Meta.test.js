import { render, screen } from '@testing-library/react';
import { Meta } from './Meta';
import '@testing-library/jest-dom';

import { TITLE } from '../constants';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

describe('Meta', () => {
  it('renders the page title', () => {
    render(<Meta />);

    expect(document.title).toBe(TITLE);
  });
});
