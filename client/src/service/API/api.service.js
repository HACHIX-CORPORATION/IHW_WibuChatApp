import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000';

axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

const ApiService = {
	getAllRoom: async function () {
		try {
			const response = await axios.get(baseUrl + '/rooms');
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	addNewRoom: async function (newName) {
		try {
			console.log('hello', { newName: newName });
			const response = await axios.post(baseUrl + '/room', {
				roomName: newName,
			});
			return response;
		} catch (error) {
			console.log(error);
		}
	},
};

export default ApiService;
