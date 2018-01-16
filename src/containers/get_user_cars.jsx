import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchUserCars, logout, deleteCar, selectCar } from '../actions/index.js';
import { IndexController } from '../controllers/index.js';
import CarCard from '../components/CarCard.jsx'
import _ from 'lodash';

class ShowCars extends Component {

  constructor(props) {
    super(props);

    this.controller = new IndexController(this);
  }

  async componentDidMount() {
    console.log(this.props.user);
    await this.controller.fetch(this.props.user);
  }

  renderCars() {
    return _.map(this.props.cars, car => {
      return (
        <CarCard
          car={car}
          handleEdit={this.controller.handleEdit}
          handleDelete={this.controller.handleDelete}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table table-hover mt-4">
          <tbody>
            {this.renderCars()}
          </tbody>
        </table>
        <div className="btn-group d-flex mb-5">
          <Link className="btn btn-info w-100" to="/user/edit">
            Edit User
          </Link>
          <Link className="btn btn-info w-100" to="/user/editpassword">
            Edit Password
          </Link>
          <Link className="btn btn-primary w-100" to="/user/cars/add">
            Add User Car
          </Link>
          <button
            className="btn btn-danger w-100"
            onClick={this.controller.logout}
            >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.currentUser,
    cars: state.currentUserCars
  };
}

const actions = {
  fetchUserCars,
  logout,
  deleteCar,
  selectCar
}

export default connect(mapStateToProps, actions)(ShowCars);
