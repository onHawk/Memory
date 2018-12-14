import React from 'react';

import { connect } from 'react-redux';

import { deleteEntry } from '../../actions/EntryActions';

const Entry = props => {
  return (
    <div>
      <div onClick={() => props.deleteEntry(props.id, props.history)}>X</div>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default connect(
  null,
  { deleteEntry }
)(Entry);
