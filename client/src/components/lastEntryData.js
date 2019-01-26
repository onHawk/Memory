import React from 'react';

const LastDate = props => {
  const { entries, lastDate } = props;
  const last = lastDate(entries);

  return (
    <p style={{ color: '#a2daff' }}>
      <span style={{ fontWeight: 'bold', color: '#333333' }}>
        {' '}
        Last entry on:
      </span>{' '}
      {last}
    </p>
  );
};

export default LastDate;
