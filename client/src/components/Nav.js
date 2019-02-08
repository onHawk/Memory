import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { FaHome, FaFeatherAlt, FaSignOutAlt } from 'react-icons/fa';

const Nav = props => {
  return (
    <div className="nav">
      <Link to="/home" className="nav-link">
        <FaHome />
        <p>Home</p>
      </Link>

      <Link
        to="/create"
        className="nav-link"
        style={{
          textDecoration: 'none',
        }}
      >
        <FaFeatherAlt />
        <p>Write</p>
      </Link>

      <div onClick={() => props.logout(props.history)} className="nav-link">
        <FaSignOutAlt />
        <p>Log out</p>
      </div>
    </div>
  );
};

export default connect(
  null,
  { logout }
)(Nav);
