import React from 'react';

import TextField from 'material-ui/TextField';

const input = props => {
  let inputElement = null;

  let error = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    error = true;
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <TextField
          error={error}
          label={props.label}
          InputProps={props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      break;
  }
  return inputElement;
};

export default input;
