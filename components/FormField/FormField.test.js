import { render, screen } from '@testing-library/react';
import FormField from './FormField';
import '@testing-library/jest-dom';

describe('FormField', () => {
  const mockProps = {
    id: 'mockFieldId',
    label: 'Mock label',
    defaultValue: 'Mock value',
    register: () => ({
      required: true
    })
  };

  let input;

  describe('when the type is `text`', () => {
    beforeEach(() => {
      mockProps.type = 'text';

      render(
        <FormField {...mockProps} />
      );

      input = screen.getByDisplayValue(mockProps.defaultValue);
    });

    it('renders a label with htmlFor attribute', () => {
      const label = screen.getByTestId(mockProps.id);

      expect(label).toBeInTheDocument();
      expect(label.htmlFor).toEqual(mockProps.id);
    });

    it('renders an input with correct attributes', () => {
      expect(input.type).toEqual(mockProps.type);
      expect(input.name).toEqual(mockProps.id);
      expect(input.id).toEqual(mockProps.id);
      expect(input.placeholder).toEqual(mockProps.label);
      expect(input.defaultValue).toEqual(mockProps.defaultValue);
    });

    it('renders input attributes from the register prop ', () => {
      expect(input.required).toEqual(true);
    });
  });

  describe('when the type is `email`', () => {
    beforeEach(() => {
      mockProps.type = 'email';

      render(
        <FormField {...mockProps} />
      );

      input = screen.getByDisplayValue(mockProps.defaultValue);
    });

    it('renders an input with correct attributes', () => {
      expect(input.type).toEqual(mockProps.type);
      expect(input.name).toEqual(mockProps.id);
      expect(input.id).toEqual(mockProps.id);
      expect(input.placeholder).toEqual(mockProps.label);
      expect(input.defaultValue).toEqual(mockProps.defaultValue);
    });

    it('renders input attributes from the register prop ', () => {
      expect(input.required).toEqual(true);
    });
  });

  describe('when the type is `textarea`', () => {
    beforeEach(() => {
      mockProps.type = 'textarea';

      render(
        <FormField {...mockProps} />
      );

      input = screen.getByDisplayValue(mockProps.defaultValue);
    });

    it('renders a textarea with correct attributes', () => {
      expect(input.id).toEqual(mockProps.id);
      expect(input.rows).toEqual(5);
    });

    it('renders textarea attributes from the register prop ', () => {
      expect(input.required).toEqual(true);
    });
  });

  describe('when the type is not supported', () => {
    beforeEach(() => {
      mockProps.type = 'tel';

      render(
        <FormField {...mockProps} />
      );
    });

    it('should NOT render anything', () => {
      const { container } = render(
        <FormField {...mockProps} />
      );

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when validationError is passed', () => {
    beforeEach(() => {
      mockProps.type = 'text';
      mockProps.validationError = 'Mock validation error';

      render(
        <FormField {...mockProps} />
      );
    });

    it('renders validation error copy', () => {
      const validationError = screen.getByText(mockProps.validationError);

      expect(validationError).toBeInTheDocument();
    });
  });
});
