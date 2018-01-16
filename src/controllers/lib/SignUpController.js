import MainController from './MainController.js';
import axios from 'axios';

export default class SignUpController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
  }

  async submitAction() {
    const values = {...this.state.values};
    const email = values.email;
    const request = await axios.post(`http://localhost:2000/users/signup`, {email: email});
    console.log(request);
    if (!request.data[0]) {
      const request = await axios.post('http://localhost:2000/users', values)
      await this.props.createUser(request);
      this.props.history.push('/user/cars');
    } else {
      alert('Email already registered!');
    }
  }

}
