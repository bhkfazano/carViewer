import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { editPassword } from '../actions/index.js';
import validator from 'validator';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class EditPassword extends Component {

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
    await this.props.editPassword(this.props.user, values.new_password);
    this.props.history.push('/user/cars');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Old Password"
          name="old_password"
          component={this.renderField}
        />
        <Field
          label="New Password"
          name="new_password"
          component={this.renderField}
        />
        <Field
          label="Retype New Password"
          name="retype_new_password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-default" to="/user/cars">
            Cancel
          </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (values.new_password != values.retype_new_password) {
    errors.retype_new_password = "Passwords dont match!";
  }
  if (!values.new_password || values.new_password.length < 8) {
    errors.new_password = "Passwords must have at least 8 characters!";
  }

  return errors;
}

function mapStateToProps(state) {
  return {user: state.currentUser};
}

const actions = { editPassword };

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, actions)(EditPassword)
);
