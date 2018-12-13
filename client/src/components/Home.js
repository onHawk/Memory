import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { allEntries } from '../actions/EntryActions';

import Entries from './entries/AllEntries';

class HomePage extends Component {
  componentWillMount() {
    this.props.allEntries();
  }

  render() {
    const { entries, usersentries } = this.props;
    console.log(entries);
    return (
      <div>
        <h1>Welcome to the Home page</h1>
        <p onClick={() => this.props.logout(this.props.history)}>Log out</p>
        {entries ? (
          entries.map((e, i) => {
            return <Entries key={i} title={e.title} body={e.content} />;
          })
        ) : (
          <p> loading</p>
        )}
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    entries: state.journal.entries,
    usersentries: state.auth.user_entries,
  };
};

export default connect(
  mapStateToprops,
  { logout, allEntries }
)(HomePage);
