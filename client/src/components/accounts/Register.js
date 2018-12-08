import React, { Component } from 'react';
import { Form, Text } from 'informed';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../actions/AuthActions';

class Register extends Component {
  handleSubmit(info) {
    this.props.register(info, this.props.history);
  }
  render() {
    return (
      <Form
        onSubmit={values => this.handleSubmit(values)}
        styles={{ display: 'flex', flexFlow: 'column' }}
      >
        <label>Full Name</label>
        <Text field="fullname" />
        <label>username</label>
        <Text field="username" />
        <label>email</label>
        <Text field="email" />
        <label>password</label>
        <Text
          field="password"
          // validate={passwordValidation}
          validateOnChange
          notify={['confirmPassword']}
        />
        <label htmlFor="notify-confirm-password">Confirm password:</label>
        <Text
          field="confirmPassword"
          // validate={passwordValidation}
          validateOnChange
          notify={['password']}
        />
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
  { register }
)(Register);
