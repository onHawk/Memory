import React from 'react';
import { Link } from 'react-router-dom';

const AllEntries = props => {
  return (
    <div className="box">
      <Link to={`/entry/${props.id}`}>
        <p>{props.title}</p>
        <p>{props.body}</p>
      </Link>
    </div>
  );
};

export default AllEntries;
