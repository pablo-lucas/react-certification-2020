import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import { ThemeContext } from '../App/App.component';
import { initialState, reducer } from '../../providers/Theme/reducer';
import VideoDetail from './VideoDetail.component';
import { video } from '../../__mocks__/videoMock';
import { AuthContext } from '../../providers/Auth/Auth.provider';
import VideoProvider from '../../providers/Video';
import { VideoContext } from '../../providers/Video/Video.provider';

const AllTheProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <ThemeContext.Provider value={{ ...state, dispatch }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('VideoDetail component', () => {
  it('should render video information', () => {
    const videoDetail = render(
      <AllTheProviders>
        <AuthProvider>
          <VideoProvider>
            <VideoDetail video={video} />
          </VideoProvider>
        </AuthProvider>
      </AllTheProviders>
    );

    expect(videoDetail.getByText(video.snippet.title)).toBeTruthy();
    expect(videoDetail.getByText(video.snippet.description)).toBeTruthy();
    expect(videoDetail.getByRole('img').getAttribute('src')).toBe(
      video.snippet.thumbnails.high.url
    );
  });

  it('should not render favorite button if user is unauthenticated', () => {
    const videoDetail = render(
      <AllTheProviders>
        <AuthProvider>
          <VideoProvider>
            <VideoDetail video={video} />
          </VideoProvider>
        </AuthProvider>
      </AllTheProviders>
    );

    expect(videoDetail.queryByTestId('favorite-btn')).toBeFalsy();
  });

  it('should render favorite button if user is authenticated', () => {
    const videoDetail = render(
      <AllTheProviders>
        <AuthProvider>
          <AuthContext.Provider value={{ authenticated: true, getFavorites: () => {} }}>
            <VideoContext.Provider value={{ videos: [video] }}>
              <VideoDetail video={video} />
            </VideoContext.Provider>
          </AuthContext.Provider>
        </AuthProvider>
      </AllTheProviders>
    );

    expect(videoDetail.getByTestId('favorite-btn')).toBeTruthy();
  });

  it('should render favorite button with yellow background if video is in favorites', () => {
    const videoDetail = render(
      <AllTheProviders>
        <AuthContext.Provider
          value={{
            authenticated: true,
          }}
        >
          <VideoContext.Provider value={{ videos: [video] }}>
            <VideoDetail video={video} />
          </VideoContext.Provider>
        </AuthContext.Provider>
      </AllTheProviders>
    );

    expect(videoDetail.getByTestId('favorite-btn')).toHaveClass('yellow');
  });
});
