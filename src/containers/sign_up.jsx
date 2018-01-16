import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { createUser } from '../actions/index.js';
import { SignUpController } from '../controllers/index.js';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        first_name: "",
        last_name: "",
        personal_phone: "",
        password: "",
        retype_password: ""
      }
    };
    this.controller = new SignUpController(this);
  }

  //const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

  render() {

    const { handleChange, submitAction } = this.controller;
    const { values } = this.state;

    return (

      <form className="form-horizontal">

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.email} type="email" className="form-control" placeholder="Enter email" id="email" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.first_name} className="form-control" id="first_name" placeholder="Enter First Name" onChange={event => handleChange(event)}/ >
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.last_name} className="form-control" placeholder="Enter Last Name" id="last_name" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.personal_phone} className="form-control" placeholder="Enter Phone" id="personal_phone" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.password} type="password" className="form-control" placeholder="Enter password" id="password" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.retype_password} type="password" className="form-control" placeholder="Retype password" id="retype_password" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="bbtt" >
          <button type="button" className="btn btn-success btn-block" onClick={submitAction} >Register</button>
          <Link type="button" to="/" className="btn btn-outline-danger btn-block">Cancel</Link>
        </div>
      </form>
    );
  }
}

export default connect(null, { createUser })(SignUp)
