import { render } from '@testing-library/react';
import { Meta } from './Meta';
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
  it('renders correctly', () => {
    render(<Meta />);

    expect(document.title).toBe(TITLE);
  });
});
