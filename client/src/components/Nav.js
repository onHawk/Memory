import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { TiPlusOutline, TiPencil, FaFeatherAlt } from 'react-icons/fa';

const Nav = props => {
  return (
    <div className="nav">
      {/* <h2>{this.props.user.username}</h2> */}
      <Link to="/home" className="nav-link">
        <p>Home</p>
      </Link>
      <div className="nav-link">
        <p onClick={() => props.logout(props.history)}>Log out</p>
      </div>

      <Link to="/create" style={{ textDecoration: 'none' }}>
        <div className="nav-link">
          <FaFeatherAlt />
          <p>Write</p>
        </div>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { logout }
)(Nav);
