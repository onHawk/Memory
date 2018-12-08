import React from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Whats crackin</h2>
      <Link to="/login">
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Landing;
