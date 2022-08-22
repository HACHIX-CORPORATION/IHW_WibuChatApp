import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000';

axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

const ApiService = {
	addNewRoom: function (newName) {
		// POST request always return response, here is "axios.post..."
		return axios.post(baseUrl + '/room', {
			roomName: newName,
		});
	},
	getAllRoom: function () {
		return axios.get(baseUrl + '/rooms');
	},
};
export default ApiService;
