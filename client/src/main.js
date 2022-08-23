import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import socketClient from './service/Socket.js';

// connect socket when App start
socketClient.setup();

library.add(fas);

createApp(App)
	.component('fa', FontAwesomeIcon)
	.use(router)
	.mount('#app');
