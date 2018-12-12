import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { allEntries } from '../actions/EntryActions';

class HomePage extends Component {
  // componentWillMount() {
  //   this.props.allEntries();
  // }

  render() {
    const { entries, usersentries } = this.props;
    console.log(usersentries);
    return (
      <div>
        <h1>Welcome to the Home page</h1>
        <p onClick={() => this.props.logout(this.props.history)}>Log out</p>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    // entries: state.journal.entries,
    usersentries: state.auth.user_entries,
  };
};

export default connect(
  mapStateToprops,
  { logout, allEntries }
)(HomePage);
