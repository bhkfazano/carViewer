import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { unselectCar, editCar } from '../actions/index.js';
import validator from 'validator';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class EditCar extends Component {

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
    await this.props.editCar(this.props.car, values);
    await this.props.unselectCar();
    this.props.history.push('/user/cars');

  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Brand"
          name="brand"
          component={this.renderField}
        />
        <Field
          label="Model"
          name="model"
          component={this.renderField}
        />
        <Field
          label="Year"
          name="year"
          component={this.renderField}
        />
        <Field
          label="Price"
          name="price"
          component={this.renderField}
        />
        <Field
          label="Image Url"
          name="image_url"
          component={this.renderField}
        />
        <Field
          label="Color"
          name="color"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/user/cars" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.brand) {
    errors.Brand = "Enter a valid brand!";
  }
  if (!values.model) {
    errors.model = "Enter a valid model!";
  }
  if (!values.year) {
    errors.year = "Enter a year!";
  }
  if (!values.price) {
    errors.price = "Enter a price!";
  }
  if (!values.image_url) {
    errors.image_url = "Enter a image url!";
  }
  if (!values.color) {
    errors.color = "Invalid color!";
  }

  return errors;
}

function mapStateToProps(state) {
  return {car: state.currentCar};
}

const actions = { unselectCar, editCar };

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(
  connect(mapStateToProps, actions)(EditCar)
);