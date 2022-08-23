import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import socketClient from './service/Socket.js';
import mitt from 'mitt'

const emitter = mitt()


// connect socket when App start
socketClient.setup();

library.add(fas);

const app = createApp(App)
	.component('fa', FontAwesomeIcon)
	.use(router);

	app.config.globalProperties.emitter = emitter;
	app.mount('#app')
