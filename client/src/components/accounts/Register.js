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
      <div className="container">
        <h2 style={{ margin: '0' }}>Register</h2>
        <Form onSubmit={values => this.handleSubmit(values)}>
          {({ formState, formApi }) => (
            <div className="form">
              <Validate errors={formState.errors} />
              <p style={{ padding: '5px' }}>
                Password must be 8 characters long
              </p>
              <div className="form-fields">
                <label>Full Name</label>
                <Text field="fullname" placeholder="full name" />
              </div>

              <div className="form-fields">
                <label>username</label>
                <Text field="username" placeholder="username" />
              </div>

              <div className="form-fields">
                <label>email</label>
                <Text field="email" placeholder="email" />
              </div>

              <div className="form-fields">
                <label>password</label>
                <Text
                  placeholder="password"
                  field="password"
                  type="password"
                  validate={this.passwordValidation}
                  validateOnChange
                  notify={['confirmPassword']}
                />
                <code>{console.log(formState.values)}</code>
              </div>
              <div className="form-fields">
                <label htmlFor="notify-confirm-password">
                  Confirm password:
                </label>
                <Text
                  placeholder="confirm password"
                  type="password"
                  field="confirmPassword"
                  validate={this.passwordValidation}
                  validateOnChange
                  notify={['password']}
                />
              </div>

              <button type="submit" className="form-button">
                Sign Up
              </button>

              <h3>{this.props.message}</h3>
            </div>
          )}
        </Form>
        <span>
          Already registered?
          <Link
            to="/login"
            style={{
              marginLeft: '1px',
              textDecoration: 'none',
              color: '#73c2fb',
            }}
          >
            {' '}
            Login
          </Link>
        </span>
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
