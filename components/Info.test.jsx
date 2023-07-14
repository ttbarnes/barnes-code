import { render, screen } from '@testing-library/react';
import { Info } from './Info';
import '@testing-library/jest-dom';

describe('Info', () => {
  it('renders correctly', () => {
    render(
      <Info
        data={[
          {
            text: 'List item text',
            title: 'List item title',
            imgPath: '/image.svg',
          },
        ]}
        strapline='Strapline'
        title='Title goes here'
      />
    );

    const title = screen.getByText(/title goes here/i);
    const strapline = screen.getByText(/strapline/i);

    const listItemImg = screen.getByRole('img', {
      name: /list item title/i,
    });
    const listItemTitle = screen.getByRole('heading', {
      name: /list item title/i,
    });
    const listItemText = screen.getByText(/list item text/i);

    expect(title).toBeInTheDocument();
    expect(strapline).toBeInTheDocument();
    expect(listItemImg).toBeInTheDocument();
    expect(listItemTitle).toBeInTheDocument();
    expect(listItemText).toBeInTheDocument();
  });
});
