import Vue from 'vue';
import Vuetify from 'vuetify'
import App from './App.vue';
import store from './store'
import './main.styl'
import router from './router'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#ff5722',
    secondary: '#f06292',
    accent: '#8c9eff',
    error: '#ff9800',
  }})


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
