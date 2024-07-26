import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {


  test('calls setQuery on input change', () => {
    const setQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar setQuery={setQuery} />
    );
    const input = getByPlaceholderText('Search for a movie...');
    fireEvent.change(input, { target: { value: 'Inception' } });
    expect(setQuery).toHaveBeenCalledWith('Inception');
  });
});
 