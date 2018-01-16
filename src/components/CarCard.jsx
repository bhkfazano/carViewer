import React, { Component } from "react";

export default class CarCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const car = this.props.car;
    var handleEdit = this.props.handleEdit;
    var handleDelete = this.props.handleDelete;
    return (
      <tr key={car._id}>
        <td>
          <img src={car.image_url} width={150} height={150}></img>
        </td>
        <td>
          <div><strong>Model</strong> {car.model}</div>
          <div><strong>Brand</strong> {car.brand}</div>
          <div><strong>Year</strong> {car.year}</div>
          <div><strong>Price</strong> {car.price}</div>
          <div><strong>Color</strong> {car.color}</div>
        </td>
        <td>
          <div className="btn-group-vertical d-flex">
            <button
              className="btn btn-outline-info w-100"
              onClick={() => handleEdit(car)}
              >
              Edit
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-danger w-100 mt-1"
              onClick={() => handleDelete(car)}
              >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
