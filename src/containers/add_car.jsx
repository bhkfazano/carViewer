import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { addCar } from '../actions/index.js';
import { AddCarController } from '../controllers/index.js';


class AddCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {
        brand: "",
        model: "",
        year: "",
        price: "",
        color: "",
        image_url: ""
      }
    };
    this.controller = new AddCarController(this);
  }

  render() {

    const { brand, model, year, price, color } = this.state.values;
    const isEnabled = brand.length >=3 && model.length >=3 && year.length >=3 && price.length >=3 && color.length >=3;

    const { handleChange, handleUpload, submitAction } = this.controller;
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
            <input type="file" className="form-control" ref="fileinput" onChange={handleUpload} />
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
  return { user: state.currentUser };
}

export default connect(mapStateToProps, { addCar })(AddCar);
