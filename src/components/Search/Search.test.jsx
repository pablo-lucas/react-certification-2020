import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import Search from './Search.component';

describe('Search component', () => {
  it('should have a display value by default', () => {
    const search = render(<Search onFormSubmit={() => {}} />);
    expect(search.getByDisplayValue('wizeline')).toBeTruthy();
  });
});

it('should call the onFormSubmit method when the user search', async () => {
  const mockOnFormSubmit = jest.fn(() => {});
  const history = { push: jest.fn() };
  const search = render(
    <BrowserRouter>
      <Search onFormSubmit={mockOnFormSubmit} history={history} />
    </BrowserRouter>
  );
  fireEvent.submit(search.getByTestId('submit-form'));
  expect(mockOnFormSubmit).toHaveBeenCalled();
});
