import React, { Component } from 'react';
import { Form, Text, withFormState } from 'informed';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../actions/AuthActions';

import Validate from './Validate';

class Register extends Component {
  handleSubmit(info) {
    this.props.register(info, this.props.history);
  }

  basicValidation = value => {
    return !value || value.length < 6
      ? 'Password must be at least 6 characters'
      : null;
  };

  matchValidation = (value, values) => {
    return values.password !== values.confirmPassword
      ? 'Passwords must match'
      : null;
  };

  passwordValidation = (value, values) => {
    return this.basicValidation(value) || this.matchValidation(value, values);
  };
  render() {
    return (
      <div>
        <Form onSubmit={values => this.handleSubmit(values)}>
          {({ formState }) => (
            <div>
              <label>Full Name</label>
              <Text field="fullname" />

              <label>username</label>
              <Text field="username" />

              <label>email</label>
              <Text field="email" />

              <label>password</label>
              <Text
                field="password"
                validate={this.passwordValidation}
                validateOnChange
                notify={['confirmPassword']}
              />

              <label htmlFor="notify-confirm-password">Confirm password:</label>
              <Text
                field="confirmPassword"
                validate={this.passwordValidation}
                validateOnChange
                notify={['password']}
              />
              {/* <code>{console.log(formState.errors)}</code> */}
              <button type="submit">Submit</button>
              <Validate errors={formState.errors} />
              <h3>{this.props.message}</h3>
            </div>
          )}
        </Form>
      </div>
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
