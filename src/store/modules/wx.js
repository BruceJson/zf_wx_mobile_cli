import Cookies from 'js-cookie';

import {
    commonCfg
} from '@/config';

import tools from '@/utils/tools';

import {
    wxApi
} from '@/api';

// appId
const appId = commonCfg['ENV'] === 'dev' ? 'wxe921ab8e42df67e9' : 'wx74350f03ab8a6af3';

function getRedirectUrl() {
    return encodeURIComponent(commonCfg['API_DOMAIN'] + '/wechat/auth');
}

function getAuthUrl() {
    return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + getRedirectUrl() + '&response_type=code&scope=snsapi_userinfo&state=' + encodeURIComponent(window.location.href) + '#wechat_redirect';
}

export default {
    state: {
        // wxOpenId: commonCfg.DEV ? "GJXVS13233dhgfhjfg_fDF234Bsf" : ''
        wxOpenId: commonCfg.DEV ? "oX7OOuFbkTGn9vE7JtlJaByKtehg" : Cookies.get('user_openid')
        // wxOpenId: ''
    },
    mutations: {
        SET_WX_OPENID: (state, openId) => {
            state.wxOpenId = openId;
        }
    },
    actions: {
        // 微信授权 => 这步主要就是为了获取code(code是用来获取openId用的)
        WxAuthor({
            commit,
            state
        }) {
            return new Promise(resolve => {
                if (commonCfg.DEV) {
                    resolve();
                } else {
                    if (!!state.wxOpenId) {
                        // 如果存在wxOpenId，直接验证通过
                        resolve();
                    } else {
                        // 如果如果没有wxOpenId，说明没有进行授权，跳转至回调页面
                        window.location.href = getAuthUrl();
                    }
                }
            });
        },

        // 获取微信openId
        async GetWxOpenId({
            commit,
            state
        }) {
            const code = tools.getParamData('code');
            if (code) {
                const resp = await wxApi.getWxOpenId({
                    code: code
                });
                console.log('获取wxOpenId成功~~');
                console.log(resp);

                commit('SET_WX_OPENID', resp.data.openid);
                return resp.data.openid;
            } else {
                throw new Error('###授权code缺失~~');
            }
        }
    }
};
