import Vue from 'vue'
import VueTap from 'v-tap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCookie from 'vue-cookie'

import App from './App.vue'
import {router} from './router/router.js'
import {store} from './store/store.js'

import './public/css/reset.scss';

// 引入px与rem的换算
import {remToPxFun} from './public/js/model';
remToPxFun()


//实例化vue模块 
Vue.use(VueTap)
Vue.use(VueCookie);
Vue.use(VueAwesomeSwiper)

// 创建一个空组件
Vue.extend({});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

