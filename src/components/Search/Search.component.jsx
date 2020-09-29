import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Form, Input } from 'semantic-ui-react';

const Search = ({ onFormSubmit }) => {
  const history = useHistory();
  const [term, setTerm] = useState('wizeline');

  useEffect(() => {
    onFormSubmit(term);
  }, []);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    history.push('/');
  };

  return (
    <Form onSubmit={onSubmit} data-testid="submit-form">
      <Form.Field>
        <Input
          type="text"
          value={term}
          onChange={onInputChange}
          icon="search"
          placeholder="Search..."
        />
      </Form.Field>
    </Form>
  );
};

export default Search;
