import React from 'react';

const AllEntries = props => {
  return (
    <div style={{ width: '200px' }}>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default AllEntries;
