import MainController from './MainController.js';
import axios from 'axios';

export default class LoginController extends MainController {

  constructor(context) {
    super(context);
    this.loginAction = this.loginAction.bind(context);
		this.submitAction = this.submitAction.bind(context);
  }

  async loginAction(values) {
    const email = values.email;
    const password = values.password;
    const request = await axios.post(`http://localhost:2000/users/usercheck`, {email: email, password: password});
    return request;
  }

  async submitAction() {
    const values = {...this.state.values}
    const user = await this.controller.loginAction(values);
    if (!user.data[0]) {
      alert("Email or password are incorrect!!");
    } else {
      await this.props.login(user.data[0]);
      this.props.history.push('/user/cars');
    }
  }

}
