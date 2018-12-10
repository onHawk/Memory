import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

class HomePage extends Component {
  render() {
    const { entries } = this.props;
    return (
      <div>
        <h1>Welcome to the Home page</h1>
        <p onClick={() => this.props.logout(this.props.history)}>Log out</p>
      </div>
    );
  }
}

export default connect(
  null,
  { logout }
)(HomePage);
