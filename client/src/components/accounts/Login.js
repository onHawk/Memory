import React, { Component } from 'react';
import { Form, Text } from 'informed';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/AuthActions';

class Login extends Component {
  handleSubmit(credentials) {
    console.log(credentials);
    this.props.login(credentials, this.props.history);
  }
  render() {
    return (
      <Form onSubmit={values => this.handleSubmit(values)}>
        <label>username: </label>
        <Text field="username" />
        <label>password: </label>
        <Text field="password" />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.auth.message,
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
