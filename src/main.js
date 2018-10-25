// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

// 移除移动端点击延迟
// const FastClick = require('fastclick');
// FastClick.attach(document.body);

// vux组件全局化
import {
    AlertPlugin,
    ToastPlugin,
    LoadingPlugin,
    ConfirmPlugin 
} from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)


// 全局化vuescroll
import VueScroller from 'vue-scroller'
// import 'vuescroll/dist/vuescroll.css';
Vue.use(VueScroller);

import tools from '@/utils/tools';
Vue.prototype.tools = tools;


Vue.config.productionTip = false;

// import '@/mock';

import '@/permission/permission';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
