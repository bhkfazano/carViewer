import BaseRepository from "./BaseRepository.js";

export default class SignUpRepository extends BaseRepository {

	constructor() {
		super();
	}

  async checkExist(body) {
    return await this.post('/users/signup', body);
  }

  async signup(body) {
    return await this.post('/users', body);
  }

}
