import axios from 'axios';

const ROOT_URL = `http://localhost:2000`;

export default class BaseRepository {

  async get(endpoint) {
    return await axios.get(`${ROOT_URL}${endpoint}`);
  }

  async post(endpoint, body) {
		return await axios.post(`${ROOT_URL}${endpoint}`, body);
	}

	async put(endpoint, body) {
		return await axios.put(`${ROOT_URL}${endpoint}`, body);
	}

  async delete(endpoint) {
    return await axios.delete(`${ROOT_URL}${endpoint}`);
  }

  /**
  async resolvePromise(promise) {
		var data;
		var error;

		try {
			const result = await promise;
			if(result.data.success) data = result.data.data;
			else if(result.data) error = result.data.status;
			else error = { code: 502, msg: "unknown_error" };

		} catch(e) {
			error = {
				code: 502,
				msg: e
			};
		}

		return { error, data };
	}
  **/
}
