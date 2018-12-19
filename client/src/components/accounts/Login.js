import React, { Component } from 'react';
import { Form, Text } from 'informed';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/AuthActions';

class Login extends Component {
  handleSubmit(credentials) {
    // console.log(credentials);
    this.props.login(credentials, this.props.history);
  }
  render() {
    return (
      <div className="container">
        <h2 style={{ margin: '0 0 3rem 0' }}>Login</h2>
        {this.props.error ? <h3>{this.props.error}</h3> : null}
        <Form onSubmit={values => this.handleSubmit(values)} className="form">
          <div className="form-fields">
            <label>username: </label>
            <Text field="username" />
          </div>
          <div className="form-fields">
            <label>password: </label>
            <Text field="password" type="password" />
          </div>

          <button type="submit" className="form-button">
            Submit
          </button>
        </Form>

        <Link to="/register" className="redirect">
          <p>register</p>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.auth.success,
    error: state.auth.login_error,
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
