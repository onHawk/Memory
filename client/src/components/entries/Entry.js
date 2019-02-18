import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteEntry } from '../../actions/EntryActions';

import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import moment from 'moment';

const Entry = props => {
  const created = moment(props.createdOn).format('MMM D | hh:mm');

  return (
    <div className="fullview">
      <div className="fullview-edits">
        <FiTrash2
          className="fullview-edits-button"
          onClick={() => props.deleteEntry(props.id, props.history)}
        />

        <Link to={`/edit/${props.id}`} className="fullview-edits-button">
          <FiEdit3 />
        </Link>
      </div>

      <div className="fullview-contents">
        <p className="fullview-title">{props.title}</p>
        <span className="fullview-line" />
        <div style={{ display: 'flex' }}>
          <p className="fullview-label">#{props.label}</p>
          <p>{created}</p>
        </div>
        <p className="fullview-body">{props.body}</p>
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteEntry }
)(Entry);
