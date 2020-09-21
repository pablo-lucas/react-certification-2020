import React from 'react';
import { Container } from 'semantic-ui-react';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <Container style={{ marginTop: '1em' }} className="container">
      {children}
    </Container>
  );
}

export default Layout;
