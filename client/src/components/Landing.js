import React from 'react';

import { Link } from 'react-router-dom';

import Register from '../components/accounts/Register';

const Landing = () => {
  return (
    <div className="container">
      <h1>Welcome</h1>

      <div className="auth_container">
        <Link to="/login" className="auth">
          Login
        </Link>

        <Link to="register" className="auth">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Landing;
