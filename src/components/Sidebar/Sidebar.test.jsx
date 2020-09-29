import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import { AuthContext } from '../../providers/Auth/Auth.provider';
import Sidebar from './Sidebar.component';

describe('Sidebar component', () => {
  it('should not render favorite link when the user is not authenticated', () => {
    const sidebar = render(
      <BrowserRouter>
        <AuthProvider>
          <Sidebar />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(sidebar.queryByTestId('favorites-link')).toBeFalsy();
  });

  it('should render favorite link when the user is authenticated', () => {
    const sidebar = render(
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated: true }}>
          <Sidebar visible />
        </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(sidebar.getByTestId('favorites-link')).toBeTruthy();
  });
});
