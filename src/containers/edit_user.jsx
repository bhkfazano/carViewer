import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editUser, deleteUser } from '../actions/index.js';
import validator from 'validator';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class EditUser extends Component {

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
    await this.props.editUser(this.props.user, values);
    this.props.history.push('/user/cars');
  }

  async deleteUser() {
    await this.props.deleteUser(this.props.user);
    this.props.history.push('/');
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-danger" onClick={this.deleteUser.bind(this)}>Delete User</button>
        <Link className="btn btn-default" to="/user/cars">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!validator.isEmail(`${values.email}`)) {
    errors.email = "Insert a valid email!";
  }
  if (!values.first_name) {
    errors.first_name = "Insert a valid first name!";
  }
  if (!values.last_name) {
    errors.last_name = "Insert a valid last name!";
  }
  if (!values.personal_phone) {
    errors.personal_phone = "Insert a valid phone!";
  }

  return errors;
}

function mapStateToProps(state) {
  return {user: state.currentUser};
}

const actions = { editUser, deleteUser };

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, actions)(EditUser)
);
