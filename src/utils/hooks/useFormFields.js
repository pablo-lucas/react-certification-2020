import { useState } from 'react';

export function useFormFields(initalState) {
  const [fields, setValues] = useState(initalState);

  return [
    fields,
    (event) => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}
