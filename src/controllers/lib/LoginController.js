import MainController from './MainController.js';
import { LoginRepository } from '../../api/index.js';
import axios from 'axios';

export default class LoginController extends MainController {

  constructor(context) {
    super(context);
    this.loginRepo = new LoginRepository();
    this.loginAction = this.loginAction.bind(context);
		this.submitAction = this.submitAction.bind(context);
  }

  async loginAction(values) {
    const email = values.email;
    const password = values.password;
    const request = await this.controller.loginRepo.checkExist({email: email, password: password});
    return request;
  }

  async submitAction() {
    const values = {...this.state.values}
    const user = await this.controller.loginAction(values);
    if (!user.data || user.data.status == 1) {
      alert("Email or password are incorrect!!");
    } else {
      await this.props.login(user.data);
      this.props.history.push('/user/cars');
    }
  }

}
