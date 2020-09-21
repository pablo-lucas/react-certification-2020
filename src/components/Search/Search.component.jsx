import React, { useEffect, useState } from 'react';
import { Form, Input } from 'semantic-ui-react';

const Search = ({ onFormSubmit }) => {
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
  };

  return (
    <Form onSubmit={onSubmit}>
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
