import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';

const Search = () => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <Form.Field>
      <Input
        type="text"
        value={term}
        onChange={onInputChange}
        icon="search"
        placeholder="Search..."
      />
    </Form.Field>
  );
};

export default Search;
