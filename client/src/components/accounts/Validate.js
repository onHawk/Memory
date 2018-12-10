import React from 'react';

const Validator = props => {
  return (
    <div
      style={{
        color: 'red',
        height: '100px',
        width: '100px',
        backgroundColor: 'grey',
      }}
    >
      <p>{props.errors.password}</p>
    </div>
  );
};

export default Validator;
