import MainController from './MainController.js';
import { SignUpRepository } from '../../api/index.js';
import axios from 'axios';

export default class SignUpController extends MainController {

  constructor(context) {
    super(context);
    this.signRepo = new SignUpRepository();
    this.submitAction = this.submitAction.bind(context);
  }

  async submitAction() {
    const values = {...this.state.values};
    const email = values.email;
    const request = await this.controller.signRepo.checkExist({email:email});
    console.log(request);
    if (!request.data[0]) {
      const request = await this.controller.signRepo.signup(values);
      await this.props.createUser(request);
      this.props.history.push('/user/cars');
    } else {
      alert('Email already registered!');
    }
  }

}
