import Vue from 'vue'
import App from './App.vue';
import router from './router/index.js';
import socketIOClient from 'socket.io-client';
import { store } from './store/store';
const ENDPOINT = 'http://localhost:5000';

Vue.prototype.$socket = socketIOClient(ENDPOINT);
Vue.config.productionTip = false;

Vue.prototype.$eventBus = new Vue();
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')