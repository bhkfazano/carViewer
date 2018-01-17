import MainController from './MainController.js';
import { CarRepository } from '../../api/index.js';
import axios from 'axios';

export default class AddCarController extends MainController {

  constructor(context) {
    super(context);
    this.carRepo = new CarRepository();
    this.submitAction = this.submitAction.bind(context);
    this.handleUpload = this.handleUpload.bind(context);
  }

  async submitAction() {
    const userid = this.props.user._id;
    const car = { ...this.state.values, user_id: userid };
    console.log(car);
    const request = await this.controller.carRepo.addCar(userid, car);
    await this.props.addCar(request);
    this.props.history.push('/user/cars');
  }

  async handleUpload(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', new Blob([file], { type: "multipart/form-data" }));
    const result = await this.controller.carRepo.uploadCar(formData);

    const values = this.state.values;
    values.image_url = result.data;
    this.setState({values:values})
  }

}
