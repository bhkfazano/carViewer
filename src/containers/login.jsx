import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, fetchUserCars, userCheck } from '../actions/index.js';
import validator from 'validator';
import _ from 'lodash';

class Login extends Component {

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
    const user = await this.props.userCheck(values);
    if (!user.payload.data[0]) {
      alert('Email or password are incorret!');
    } else {
      await this.props.login(user.payload.data[0]);
      this.props.history.push('/user/cars');
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
          label="Password"
          name="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </form>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!validator.isEmail(`${values.email}`)) {
    errors.email = "Insert a valid email!";
  }
  if (!values.password) {
    errors.password = "Type password!";
  }

  return errors;
}

function mapStateToProps(state) {
  return {user: state.currentUser};
}

const actions = { fetchUserCars, login, userCheck };

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, actions)(Login)
);
