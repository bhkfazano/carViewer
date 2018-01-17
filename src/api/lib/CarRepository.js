import BaseRepository from "./BaseRepository.js";

export default class CarRepository extends BaseRepository {

	constructor() {
		super();
	}

  async addCar(userid, body) {
    return await this.post(`/users/${userid}/cars`, body);
  }

  async editCar(carid, body) {
    return await this.put(`/cars/${carid}`, body);
  }

	async uploadCar(body) {
		return await this.post('/upload', body);
	}

}
