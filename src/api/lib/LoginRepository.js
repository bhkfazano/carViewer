import BaseRepository from "./BaseRepository.js";

export default class LoginRepository extends BaseRepository {

	constructor() {
		super();
	}

  async checkExist(body) {
    return await this.post('/users/usercheck', body);
  }

}
