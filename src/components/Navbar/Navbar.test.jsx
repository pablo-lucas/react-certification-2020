import React, { useReducer } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import Navbar from './Navbar.component';
import { ThemeContext } from '../App/App.component';
import { initialState, reducer } from '../../providers/Theme/reducer';
import { AuthContext } from '../../providers/Auth/Auth.provider';

const AllTheProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <ThemeContext.Provider value={{ ...state, dispatch }}>
          <AuthProvider>{children}</AuthProvider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const AllTheProvidersAuthenticated = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <ThemeContext.Provider value={{ ...state, dispatch }}>
          <AuthContext.Provider value={{ authenticated: true }}>
            {children}
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Navbar component', () => {
  it('should render sign in icon', () => {
    const navbar = render(<Navbar onFormSubmit={() => {}} />, {
      wrapper: AllTheProviders,
    });
    expect(navbar.queryByTestId('sign-in-link')).toBeTruthy();
  });

  it('should render sign out icon when user is authenticated', () => {
    const navbar = render(<Navbar onFormSubmit={() => {}} />, {
      wrapper: AllTheProvidersAuthenticated,
    });
    expect(navbar.queryByTestId('sign-out-link')).toBeTruthy();
  });
});
