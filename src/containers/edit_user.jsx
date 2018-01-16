import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { editUser, deleteUser } from '../actions/index.js';
import { EditUserController } from '../controllers/index.js';

class EditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        first_name: "",
        last_name: "",
        personal_phone: ""
      }
    };
    this.controller = new EditUserController(this);
  }

  render() {

    const { email } = this.state.values;
    const isEnabled = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    const { handleChange, submitAction, deleteUser } = this.controller;
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

        <div className="bbtt" >
          <button disabled={!isEnabled} type="button" className="btn btn-success btn-block" onClick={submitAction} >Submit</button>
          <button type="button" className="btn btn-outline-danger btn-block" onClick={deleteUser} >Delete User</button>
        </div>

      </form>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.currentUser};
}

const actions = { editUser, deleteUser };

export default connect(mapStateToProps, actions)(EditUser);
