import MainController from './MainController.js';
import axios from 'axios';

export default class AddCarController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
  }

  async submitAction() {
    const userid = this.props.user._id;
    const car = { ...this.state.values, user_id: userid };
    console.log(car);
    const request = await axios.post(`http://localhost:2000/users/${userid}/cars`, car);
    await this.props.addCar(request);
    this.props.history.push('/user/cars');
  }

}
