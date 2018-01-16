import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { editPassword } from '../actions/index.js';
import { EditPasswordController } from '../controllers/index.js';

class EditPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        old_password: "",
        new_password: "",
        retype_new_password: ""
      }
    };
    this.controller = new EditPasswordController(this);
  }

  render() {

    const { retype_new_password, new_password } = this.state.values;
    const isEnabled = new_password.length >= 6 && new_password == retype_new_password;

    const { handleChange, submitAction } = this.controller;
    const { values } = this.state;

    return (
      <form className="form-horizontal">

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.old_password} type="password" className="form-control" placeholder="Enter old password" id="old_password" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.new_password} type="password" className="form-control" placeholder="Enter new password" id="new_password" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.retype_new_password} type="password" className="form-control" placeholder="Retype new password" id="retype_new_password" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="bbtt" >
          <button disabled={!isEnabled} type="button" className="btn btn-success btn-block" onClick={submitAction} >Submit</button>
          <Link type="button" to="/user/cars" className="btn btn-outline-danger btn-block">Cancel</Link>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.currentUser};
}

export default connect(mapStateToProps, { editPassword })(EditPassword);
