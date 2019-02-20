import React from 'react';
import { Link } from 'react-router-dom';

const AllEntries = props => {
  return (
    <div className="box">
      <Link to={`/entry/${props.id}`} className="box-contents">
        <div className="box-contents-left">
          <div className="box-contents-labels">
            <p style={{ fontWeight: 'bold' }}>{props.title}</p>
            <p style={{ color: '#a2daff', fontSize: '14px' }}>#{props.label}</p>
          </div>
          <p
            style={{
              height: '110px',
              padding: '0',
            }}
          >
            {props.body}...
          </p>
        </div>

        <div className="box-contents-right">
          <p>{props.month}</p>
          <p id="date">{props.date}</p>
          <p style={{ fontSize: '14px' }}>{props.day}</p>
        </div>
      </Link>
    </div>
  );
};

export default AllEntries;
