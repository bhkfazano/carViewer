import MainController from './MainController.js';
import axios from 'axios';

export default class editPassword extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
  }

  async submitAction() {
    const password = this.state.values.new_password
    const userid = this.props.user._id;
    const request = await axios.put(`http://localhost:2000/users/${userid}`, {password: password});
    await this.props.editPassword(password);
    this.props.history.push('/user/cars');
  }
}
