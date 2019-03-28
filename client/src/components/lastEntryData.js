import React from 'react';

const LastDate = props => {
  const { entries, lastDate } = props;
  const last = lastDate(entries);

  return (
    <p
      style={{
        fontFamily: 'Yrsa, serif',

        fontWeight: 'bold',
      }}
    >
      <span
        style={{
          color: '#333333',
        }}
      >
        {' '}
        Last entry:
      </span>{' '}
      {last}
    </p>
  );
};

export default LastDate;
