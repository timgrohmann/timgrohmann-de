import Vue from 'vue';
import Router from 'vue-router';

import LandingPage from './components/LandingPage.vue'
import AboutMe from './components/AboutMe.vue'
import MySkills from './components/MySkills.vue'
import Sperrmuell from './components/spermuell/Sperrmuell.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            components: {
                default: LandingPage,
            }
        },
        {
            path: '/about-me',
            name: 'AboutMe',
            components: {
                default: AboutMe,
            }
        },
        {
            path: '/my-skills',
            name: 'MySkills',
            components: {
                default: MySkills,
            }
        },
        ,
        {
            path: '/sperrmuell-ma',
            name: 'Sperrmüll',
            components: {
                default: Sperrmuell,
            }
        }
    ]
})