import React from 'react';
import { Link } from 'react-router-dom';

const AllEntries = props => {
  return (
    <Link to={`/entry/${props.id}`}>
      <div style={{ width: '200px' }}>
        <p>{props.title}</p>
        <p>{props.body}</p>
      </div>
    </Link>
  );
};

export default AllEntries;
