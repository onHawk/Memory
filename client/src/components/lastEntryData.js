import React from 'react';

const LastDate = props => {
  const { entries, lastDate } = props;
  const last = lastDate(entries);

  return (
    <p
      style={{
        fontFamily: 'Yrsa, serif',
        fontSize: '17px',
        fontWeight: 'bold',
      }}
    >
      <span
        style={{
          color: '#333333',
          fontSize: '18px',
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
