import BaseRepository from "./BaseRepository.js";

export default class IndexRepository extends BaseRepository {

	constructor() {
		super();
	}

  async deleteCar(carid) {
    return await this.delete(`/cars/${carid}`);
  }

  async fetch(userid) {
    return await this.get(`/users/${userid}/cars`);
  }

}
