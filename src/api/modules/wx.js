import ajax from '@/utils/ajax';

const fetch = ajax.doNet;
const formFetch = ajax.doFormNet;

export default {
    getWxOpenId(data) {
        return fetch({
            url: '/wechat/user/getopenid',
            method: 'post',
            data
        });
    },

    // 获取wx signature
    getWxSignature: () => {
        return fetch({
            url: '/wechat/sign',
            method: 'post',
            data: {
                domain: window.location.href.split('#')[0] || ''
            }
        })
    }
};
