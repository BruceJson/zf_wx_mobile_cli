import Vue from 'vue'
import Router from 'vue-router'

import testRoutes from './modules/test';
import errorRoutes from './modules/error';

Vue.use(Router);

export {
    errorRoutes,
    testRoutes
};

export default new Router({
    mode: 'hash',
    routes: []
})
