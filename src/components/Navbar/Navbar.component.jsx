import './Navbar.styles.css';
import React, { useContext } from 'react';
import { Button, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../Search/Search.component';
import { useAuth } from '../../providers/Auth';
import { ThemeContext } from '../App/App.component';

const Navbar = ({ onFormSubmit, onShowSidebar }) => {
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  const { dispatch } = useContext(ThemeContext);

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  const toggleTheme = () => {
    dispatch({ type: 'toggleTheme' });
  };

  const StyledButton = styled(Button)`
    &&& {
      color: ${(props) => props.theme.icon};
    }
    // &&&:hover {
    //   background: black !important ;

    //   color: ${(props) => props.theme.icon};
    // }
  `;

  const StyledMenu = styled(Menu)`
    &&& {
      background-color: ${(props) => props.theme.navColor};
    }
  `;

  return (
    <div style={{ position: 'relative' }}>
      <StyledMenu attached="top" secondary>
        <StyledMenu.Item name="sidebar">
          <StyledButton
            basic
            icon
            onClick={() => onShowSidebar()}
            style={{ backgroundColor: `${(props) => props.theme.navColor} }` }}
          >
            <Icon name="bars" />
          </StyledButton>
        </StyledMenu.Item>
        <StyledMenu.Item name="search">
          <Search onFormSubmit={onFormSubmit} />
        </StyledMenu.Item>
        <StyledMenu.Item name="theme">
          <Button icon onClick={() => toggleTheme()}>
            <Icon name="moon" />
          </Button>
        </StyledMenu.Item>
        <StyledMenu.Menu position="right">
          <StyledMenu.Item name="user">
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
          </StyledMenu.Item>
        </StyledMenu.Menu>
      </StyledMenu>
      <div className="animated-border" />
    </div>
  );
};

export default Navbar;
