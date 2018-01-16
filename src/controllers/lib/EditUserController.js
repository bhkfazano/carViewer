import MainController from './MainController.js';
import { UserRepository } from '../../api/index.js';
import axios from 'axios';

export default class EditUserController extends MainController {

  constructor(context) {
    super(context);
    this.userRepo = new UserRepository();
    this.submitAction = this.submitAction.bind(context);
    this.deleteUser = this.deleteUser.bind(context);
  }

  async submitAction() {
    const values = this.state.values;
    const userid = this.props.user._id;
    const request = await this.controller.userRepo.editUser(userid, values);
    await this.props.editUser(values);
    this.props.history.push('/user/cars');
  }

  async deleteUser() {
    const user = this.props.user;
    const userid = user._id;
    const request = await this.controller.userRepo.deleteUser(userid);
    await this.props.deleteUser();
    this.props.history.push('/');
  }

}
