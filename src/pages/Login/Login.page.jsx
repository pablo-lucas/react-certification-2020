import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import { useFormFields } from '../../utils/hooks/useFormFields';
import './Login.styles.css';

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

const loginApi = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(username, password);
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
};

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [fields, onFieldChange] = useFormFields({
    username: '',
    password: '',
  });
  const [error, setError] = useState(false);

  function authenticate(event) {
    event.preventDefault();
    loginApi(fields.username, fields.password)
      .then(() => {
        login();
        history.push('/');
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <section className="login">
      <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="violet" textAlign="center">
            <Icon name="beer" /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={authenticate} error={error}>
            <Segment stacked>
              <Form.Input
                id="username"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="username"
                value={fields.username}
                onChange={onFieldChange}
              />
              <Form.Input
                id="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={fields.password}
                onChange={onFieldChange}
              />

              <Message error header="Opps!" content="Username or password are invalid" />

              <Button basic color="violet" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </section>
  );
}

export default LoginPage;
