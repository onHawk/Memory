import React from 'react';

const LastDate = props => {
  const { entries, lastDate } = props;
  const last = lastDate(entries);

  return (
    <p>
      <span style={{ fontWeight: 'bold' }}> Last entry on:</span> {last}
    </p>
  );
};

export default LastDate;
