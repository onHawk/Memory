import React from 'react';

const Entry = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Entry;
