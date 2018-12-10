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
      <div>
        <Form onSubmit={values => this.handleSubmit(values)}>
          <label>username: </label>
          <Text field="username" />
          <label>password: </label>
          <Text field="password" />
          <button type="submit">Submit</button>
        </Form>
        <h3>{this.props.message}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.auth.success,
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
