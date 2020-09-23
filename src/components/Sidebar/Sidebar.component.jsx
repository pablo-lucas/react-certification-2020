import React from 'react';
import { Link } from 'react-router-dom';

import { Sidebar as SemanticSideBar, Menu, Segment } from 'semantic-ui-react';

const Sidebar = ({ children, visible, setVisible }) => {
  return (
    <SemanticSideBar.Pushable as={Segment.Group} raised style={{ marginTop: 0 }}>
      <SemanticSideBar
        as={Menu}
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Link to="/" onClick={() => setVisible(false)}>
          <Menu.Item as="span">Home</Menu.Item>
        </Link>
        <Menu.Item as="a">Favorites</Menu.Item>
      </SemanticSideBar>
      <SemanticSideBar.Pusher dimmed={visible} style={{ height: '100%' }}>
        {children}
      </SemanticSideBar.Pusher>
    </SemanticSideBar.Pushable>
  );
};

export default Sidebar;
