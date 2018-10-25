import commonCfg from '@/config/common.conf.js';

import axios from './axios-interceptor';

// ajax方法类库
const ajax = {
    config: {
        host: commonCfg['API_DOMAIN']
    },
    // 普通ajax调用 ignoreHost
    doNet: function (req) {
        let options = {
            url: !req.ignoreHost ? (ajax.config.host + req.url) : req.url,
            method: req.method.toLowerCase(),
            responseType: 'json'
        }
        if (req.method.toLowerCase() === 'get') {
            options.params = req.data || {}
        } else if (req.method.toLowerCase() === 'post') {
            options.data = req.data || {}
        }
        return axios(options)
    },

    // 普通ajax调用 ignoreHost
    doFormNet: function (req) {
        const formData = new FormData();
        for (let i in req.data) {
            formData.append(i, req.data[i]);
        }

        let options = {
            url: !req.ignoreHost ? (ajax.config.host + req.url) : req.url,
            method: req.method.toLowerCase(),
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        options.data = formData;
        return axios(options)
    },
}
export default ajax
