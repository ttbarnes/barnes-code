import { render, screen } from '@testing-library/react';
import InlineErrorMessage from './InlineErrorMessage';
import '@testing-library/jest-dom';

describe('InlineErrorMessage', () => {
  const mockProps = {
    text: 'Mock error message',
    id: 'mockId'
  };

  let element;

  describe('when text is provided', () => {
    beforeEach(() => {
      render(
        <InlineErrorMessage {...mockProps} />
      );

      element = screen.getByText(mockProps.text);
    });

    it('renders text', () => {
      expect(element).toBeInTheDocument();
    });
  });

  describe('when no text is provided', () => {
    beforeEach(() => {
      render(
        <InlineErrorMessage id={mockProps.id} />
      );
    });

    it('should NOT render text', () => {
      element = screen.queryByText(mockProps.text);

      expect(element).toBeNull();
    });
  });

  describe('when no ID is provided', () => {
    beforeEach(() => {
      render(
        <InlineErrorMessage text={mockProps.text} />
      );
    });

    it('should NOT render text', () => {
      element = screen.queryByText(mockProps.text);

      expect(element).toBeNull();
    });
  });
});
