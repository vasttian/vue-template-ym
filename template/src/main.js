import Vue from 'vue';
import VueMDCAdapter from 'vue-mdc-adapter';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMDCAdapter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
