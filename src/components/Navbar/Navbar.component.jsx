import './Navbar.styles.css';
import React from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import Search from '../Search/Search.component';
import { useAuth } from '../../providers/Auth';

const Navbar = ({ onFormSubmit, onShowSidebar }) => {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

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
            <Dropdown icon="user circle">
              <Dropdown.Menu>
                {authenticated ? (
                  <Link to="/" onClick={deAuthenticate}>
                    <Dropdown.Item text="Sign out" />
                  </Link>
                ) : (
                  <Link to="/login">
                    <Dropdown.Item text="Sign in" />
                  </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="animated-border" />
    </div>
  );
};

export default Navbar;
