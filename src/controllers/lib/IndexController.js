import MainController from './MainController.js';
import axios from 'axios';

export default class IndexController extends MainController {

  constructor(context) {
    super(context);
    this.handleDelete = this.handleDelete.bind(context);
    this.handleEdit = this.handleEdit.bind(context);
    this.fetch = this.fetch.bind(context);
    this.logout = this.logout.bind(context);
  }

  async handleDelete(car) {
    const carid = car._id;
    const request = await axios.delete(`http://localhost:2000/cars/${carid}`);
    await this.props.deleteCar(car);
  }

  async handleEdit(car) {
    await this.props.selectCar(car);
    this.props.history.push('/user/cars/edit');
  }

  async fetch(user) {
    const userid = user._id;
    const request = await axios.get(`http://localhost:2000/users/${userid}/cars`);
    const payload = _.indexBy(request.data, '_id');
    this.props.fetchUserCars(payload)
  }

  async logout() {
    await this.props.logout();
    this.props.history.push('/');
  }

}
