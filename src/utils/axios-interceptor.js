import axios from 'axios';

import store from '@/store';

import router from '@/router';

import commonCfg from '@/config/common.conf.js';

axios.interceptors.request.use(config => {
    //在请求发送之前做一些事

    const store = require('../store/index.js').default;

    if (store.getters.apiToken) {
        config.headers['api-token'] = store.getters.apiToken;
        // config.headers['api-token'] = 'store.getters.apiToken';
    }
    return config;
});

axios.interceptors.response.use(function (response) {
    //对返回的数据进行一些处理
    var data = response.data;
    if (data.httpcode === '401' || data.httpcode === '402' || data.httpcode === '403') {
        router.push({
            path: `/error_${data.httpcode}`
        });
        return Promise.reject(data);
    } else if (data.state == 1) {
        return data;
    } else {
        throw data;
    }
}, function (error) {
    //对返回的错误进行一些处理
    throw error;
});

export default axios;
