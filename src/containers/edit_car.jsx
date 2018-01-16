import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { unselectCar, editCar } from '../actions/index.js';
import { EditCarController } from '../controllers/index.js';

class EditCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        brand: "",
        model: "",
        year: "",
        price: "",
        color: "",
        image_url: "",
        _id: ""
      }
    };
    this.controller = new EditCarController(this);
  }

  render() {

    const { handleChange, submitAction } = this.controller;
    const { values } = this.state;

    return (
      <form className="form-horizontal">

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.brand} className="form-control" placeholder="Enter brand" id="brand" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.model} className="form-control" id="model" placeholder="Enter model" onChange={event => handleChange(event)}/ >
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.year} className="form-control" placeholder="Enter year" id="year" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.price} className="form-control" placeholder="Enter price" id="price" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.color} className="form-control" placeholder="Enter color" id="color" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-12">
            <input value={values.image_url} className="form-control" placeholder="Enter image url" id="image_url" onChange={event => handleChange(event)} />
          </div>
        </div>

        <div className="bbtt" >
          <button type="button" className="btn btn-success btn-block" onClick={submitAction} >Submit</button>
          <Link type="button" to="/user/cars" className="btn btn-outline-danger btn-block">Cancel</Link>
        </div>
        
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {car: state.currentCar};
}

const actions = { unselectCar, editCar };

export default connect(mapStateToProps, actions)(EditCar);
