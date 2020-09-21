import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Search from '../Search/Search.component';

const Navbar = ({ onFormSubmit }) => {
  return (
    <div>
      <Menu attached="top" secondary>
        <Menu.Item name="sidebar">
          <Icon name="bars" color="black" />
        </Menu.Item>
        <Menu.Item name="search">
          <Search onFormSubmit={onFormSubmit} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="user">
            <Icon name="user" />
            <span>Username</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
