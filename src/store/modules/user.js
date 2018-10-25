import tools from '@/utils/tools';

import {
    userApi
} from '@/api';

export default {
    state: {
        apiToken: '',
        user: '',
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.apiToken = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        }
    },

    actions: {
        // todo 自己按照下面的actions根据业务发挥



        // // 获取绑定的用户token
        // async GetBindUser({
        //     commit,
        //     state,
        //     rootState
        // }) {
        //     if (state.appType === 'vol') {
        //         // 个人
        //         const resp = await userApi.getBindUser({
        //             openid: rootState.wx.wxOpenId
        //         });

        //         console.log('获取绑定用户token成功~', resp);
        //         const token = resp.data.userid || '';
        //         commit('SET_TOKEN', token);
        //         return token;
        //     }

        // },

        // // 获取用户信息
        // async GetUserInfo({
        //     commit,
        //     state,
        // }) {
        //     if (state.appType === 'vol') {
        //         const resp = await volApi.getUserInfo();

        //         console.log('获取绑定用户信息成功~', resp);
        //         const user = resp.data || {};
        //         commit('SET_USER', user);
        //         return resp;
        //     } else {
        //         const resp = await orgApi.getUserInfo();

        //         console.log('获取组织信息成功~', resp);
        //         const user = resp.data || {};
        //         commit('SET_USER', user);
        //         return resp;
        //     }
        // },

        // // 绑定用户
        // async BindUser({
        //     commit,
        //     state,
        // }, data) {
        //     if (state.appType === 'vol') {
        //         const resp = await volApi.bindUser(data);

        //         console.log('绑定用户成功~', resp);
        //         const token = resp.data.userid || '';
        //         commit('SET_TOKEN', token);
        //         // 清除上一个user信息
        //         commit('SET_USER', '');
        //         return token;
        //     } else {
        //         const resp = await orgApi.bindUser(data);

        //         console.log('绑定组织成功~', resp);
        //         const token = resp.data.id || '';
        //         commit('SET_TOKEN', token);
        //         // 清除上一个user信息
        //         commit('SET_USER', '');
        //         return token;
        //     }
        // }
    }
};
