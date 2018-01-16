import BaseRepository from "./BaseRepository.js";

export default class UserRepository extends BaseRepository {

	constructor() {
		super();
	}

  async editPassword(userid, body) {
    return await this.put(`/users/${userid}`, body);
  }

  async editUser(userid, body) {
    return await this.put(`/users/${userid}`, body);
  }

  async deleteUser(userid) {
    return await this.delete(`/users/${userid}`);
  }

	async checkPassword(body) {
		return await this.post('/users/usercheck', body);
	}

}
