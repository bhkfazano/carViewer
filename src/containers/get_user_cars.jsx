import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserCars, logout, deleteCar, selectCar } from '../actions/index.js';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class ShowCars extends Component {

  async componentDidMount() {
    console.log(this.props.user);
    await this.props.fetchUserCars(this.props.user);
  }

  async handleDelete(car) {
    await this.props.deleteCar(car);
  }

  async setCar(car) {
    await this.props.selectCar(car);
    this.props.history.push('/user/cars/edit');
  }

  renderCars() {
    return _.map(this.props.cars, car => {
      return (
        <tr key={car._id}>
          <td>
            <img src={car.image_url} width={150} height={150}></img>
          </td>
          <td>
            <div>Model: {car.model}</div>
            <div>Brand: {car.brand}</div>
            <div>Year: {car.year}</div>
            <div>Price: {car.price}</div>
            <div>Color: {car.color}</div>
          </td>
          <td>
            <div>
              <button
                className="btn btn-block"
                onClick={() => this.setCar(car)}
                >
                Edit
              </button>
            </div>
            <div>
              <button
                className="btn btn-block"
                onClick={() => this.handleDelete(car)}
                >
                Delete
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  async handle() {
    await this.props.logout();
    this.props.history.push('/');

  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <tbody>
            {this.renderCars()}
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/user/edit">
          Edit User
        </Link>
        <Link className="btn btn-primary" to="/user/editpassword">
          Edit Password
        </Link>
        <button
          className="btn btn-danger"
          onClick={this.handle.bind(this)}
          >
          Logout
        </button>
        <Link className="btn btn-primary" to="/user/cars/add">
          Add User Car
        </Link>
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
