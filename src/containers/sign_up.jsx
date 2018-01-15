import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser, checkForSign } from '../actions/index.js';
import validator from 'validator';
import axios from 'axios';

class SignUp extends Component {

  renderField(field) {

    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  async onSubmit(values) {
    const user = await this.props.checkForSign(values);
    if (!user.payload.data[0]) {
      await this.props.createUser(values);
      this.props.history.push('/user/cars');
    } else {
      alert('Email already registered!');
    }

  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Email"
          name="email"
          component={this.renderField}
        />
        <Field
          label="First Name"
          name="first_name"
          component={this.renderField}
        />
        <Field
          label="Last Name"
          name="last_name"
          component={this.renderField}
        />
        <Field
          label="Personal Phone"
          name="personal_phone"
          component={this.renderField}
        />
        <Field
          type="password"
          label="Password"
          name="password"
          component={this.renderField}
        />
        <Field
          type="password"
          label="Re-type Password"
          name="retypepassword"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.first_name) {
    errors.first_name = "Enter a valid name!";
  }
  if (!values.last_name) {
    errors.last_name = "Enter a valid last name!";
  }
  if (!values.personal_phone) {
    errors.personal_phone = "Enter a valid phone!";
  }
  if (!values.password || values.password.length < 8) {
    errors.password = "Enter a password with at least 8 characters!";
  }
  if (values.retypepassword != values.password) {
    errors.retypepassword = "Password do not match!";
  }
  if (!validator.isEmail(`${values.email}`)) {
    errors.email = "Invalid email!";
  }

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(null, { createUser, checkForSign })(SignUp)
);
