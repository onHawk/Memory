import React from 'react';
import { Link } from 'react-router-dom';

const AllEntries = props => {
  return (
    <div className="box">
      <Link to={`/entry/${props.id}`} className="box-contents">
        <div className="box-contents-left">
          <span
            style={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>{props.title}</p>
            <p style={{ color: '#a2daff' }}>{props.label}</p>
          </span>
          <p>{props.body}</p>
        </div>

        <div className="box-contents-right">
          <p id="date">{props.date}</p>
          <p style={{ fontSize: '14px', fontFamily: 'Dosis, sans-serif' }}>
            {props.day}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AllEntries;
