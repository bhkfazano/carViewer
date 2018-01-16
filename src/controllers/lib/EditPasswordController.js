import MainController from './MainController.js';
import { UserRepository } from '../../api/index.js';
import axios from 'axios';

export default class editPassword extends MainController {

  constructor(context) {
    super(context);
    this.userRepo = new UserRepository();
    this.submitAction = this.submitAction.bind(context);
  }

  async submitAction() {
    const password = this.state.values.new_password
    const userid = this.props.user._id;
    const request = await this.controller.userRepo.editPassword(userid, {password: password});
    await this.props.editPassword(password);
    this.props.history.push('/user/cars');
  }
}
