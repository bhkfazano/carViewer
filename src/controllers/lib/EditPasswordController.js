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
    const email = this.props.user.email;
    const old_password = this.state.values.old_password;
    const new_password = this.state.values.new_password;
    const check = await this.controller.userRepo.checkPassword({email:email, password:old_password});
    if (check.data.status != 1) {
      const userid = this.props.user._id;
      const request = await this.controller.userRepo.editPassword(userid, {password: new_password});
      console.log("check", request);
      await this.props.editPassword(request.data);
      this.props.history.push('/user/cars');
    } else {
      alert("Old password is incorrect!");
    }
  }
}
