import React, { useReducer } from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Card from './Card.component';
import { video } from '../../__mocks__/videoMock';
import { ThemeContext } from '../App/App.component';
import { initialState, reducer } from '../../providers/Theme/reducer';

const AllTheProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;
  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ ...state, dispatch }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

describe('Card component', () => {
  it('Matches the snapshot', () => {
    const card = create(
      <AllTheProviders>
        <Card video={video} isFromFavorite={false} />
      </AllTheProviders>
    );
    expect(card.toJSON()).toMatchSnapshot();
  });
  it('renders provided properties', () => {
    render(
      <AllTheProviders>
        <Card video={video} isFromFavorite={false} />
      </AllTheProviders>
    );
    expect(screen.getByText(video.snippet.title)).toBeTruthy();
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      video.snippet.thumbnails.medium.url
    );
  });
});
