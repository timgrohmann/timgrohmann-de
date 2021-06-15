import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
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
});
