import MainController from './MainController.js';
import { CarRepository } from '../../api/index.js';
import axios from 'axios';

export default class EditCarController extends MainController {

  constructor(context) {
    super(context);
    this.carRepo = new CarRepository();
    this.submitAction = this.submitAction.bind(context);
  }

  async submitAction() {
    const carid = this.props.car._id;
    const patch = this.state.values
    patch._id = carid
    const request = await this.controller.carRepo.editCar(carid, patch);
    await this.props.editCar(request);
    await this.props.unselectCar();
    this.props.history.push('/user/cars');
  }
}
