import MainController from './MainController.js';
import axios from 'axios';

export default class EditUserController extends MainController {

  constructor(context) {
    super(context);
    this.submitAction = this.submitAction.bind(context);
    this.deleteUser = this.deleteUser.bind(context);
  }

  async submitAction() {
    const values = this.state.values;
    const userid = this.props.user._id;
    const request = await axios.put(`http://localhost:2000/users/${userid}`, values);
    await this.props.editUser(values);
    this.props.history.push('/user/cars');
  }

  async deleteUser() {
    const user = this.props.user;
    const userid = user._id;
    const request = await axios.delete(`http://localhost:2000/users/${userid}`);
    await this.props.deleteUser();
    this.props.history.push('/');
  }

}
