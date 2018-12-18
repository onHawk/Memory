import React from 'react';

const Validator = props => {
  return (
    <div className="validate">
      <p>{props.errors.password}</p>
    </div>
  );
};

export default Validator;
