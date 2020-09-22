import './Navbar.styles.css';
import React from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search.component';

const Navbar = ({ onFormSubmit, onShowSidebar }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Menu attached="top" secondary>
        <Menu.Item name="sidebar">
          <Button basic icon onClick={() => onShowSidebar()}>
            <Icon name="bars" />
          </Button>
        </Menu.Item>
        <Menu.Item name="search">
          <Search onFormSubmit={onFormSubmit} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="user">
            <Dropdown icon="user">
              <Dropdown.Menu>
                <Link to="/login">
                  <Dropdown.Item text="Sign in" />
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="animated-border"></div>
    </div>
  );
};

export default Navbar;
