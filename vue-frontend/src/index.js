import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework'
import App from './App.vue';
import store from './store'
import './main.scss'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.config.productionTip = false;

Vue.use(Vuetify)


new Vue({
  store,
  router,
  vuetify: new Vuetify(
    {
      theme: {
        dark: false,
        themes: {
          light: {
            primary: '#15AB94',
            secondary: '#f89406',
            accent: '#8c9eff',
            error: '#ff9800',
          },
          dark: {
            primary: '#15AB94',
            secondary: '#f89406',
            accent: '#8c9eff',
            error: '#ff9800',
          }
        }
      },
      icons: {
        iconfont: 'md',
      },
    }
  ),
  render: h => h(App)
}).$mount('#app');
