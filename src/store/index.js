import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';

import wx from './modules/wx';
import user from './modules/user';
import permission from './modules/permission';

Vue.use(Vuex);

const storeOption = {
    getters,
    modules: {
        wx,
        user,
        permission
    }
};

export default new Vuex.Store(storeOption);
