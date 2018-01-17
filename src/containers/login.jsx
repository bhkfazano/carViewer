import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { login } from '../actions/index.js';
import { LoginController } from '../controllers/index.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: ""
      }
    };
    this.controller = new LoginController(this);
  }


  render() {

    const { submitAction, handleChange } = this.controller;
    const { values } = this.state;

    const { email, password } = this.state.values;
    const isEnabled =
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
      password.length >= 6;

    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.email} type="email" className="form-control" placeholder="Enter email" id="email" onChange={event => handleChange(event)} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.password} type="password" className="form-control" id="password" placeholder="Enter password" onChange={event => handleChange(event)}/ >
          </div>
        </div>
        <div className="bbtt" >
          <button disabled={!isEnabled} type="button" className="btn btn-success btn-block" onClick={submitAction} >Login</button>
          <Link type="button" to="/signup" className="btn btn-outline-info btn-block">Sign Up</Link>
        </div>
      </form>
    );
  }
}


export default connect(null, { login })(Login);
