import { io } from 'socket.io-client';

const socketClient = {
	// socket connect to App
	setup: function () {
		const baseURL = process.env.VUE_APP_BASE_URL;
		socketClient.io = io(baseURL, {
			closeOnBeforeunload: false,
		});
	},
	// client send event
	emit: function (event, data) {
		// const baseURL = process.env.VUE_APP_BASE_URL;
		console.log({ socketSendEvent: event, data });
		socketClient.io.emit(event, data);
	},
	
	// client receive event
	on: function (event, callback) {
		socketClient.io.on(event, callback);
		console.log('content:', { socketReceiveEvent: event });
	},

	removeOn: function (event, callback) {
		socketClient.io.off(event, callback);
	},
};

export default socketClient;
