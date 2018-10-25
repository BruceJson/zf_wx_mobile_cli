import router from '@/router';

import store from '@/store';
const whiteRoutes = [/^\/volunteer\/login/, /^\/volunteer\/forget_pwd/, /^\/volunteer\/regist/, /^\/org\/login/, /^\/org\/forget_pwd/, /^\/error_./]

router.beforeEach((to, from, next) => {
    if (store.getters.accessRoutes.length > 0) {
        // 如果路由已经根据appType过滤添加
        window.document.title = to.meta.title || '';
        next();
        // 微信授权，获取openId
        // store.dispatch('WxAuthor').then(() => {
        //     // 判断白名单（这里白名单判断之所以放在这里是因为一定要等到addRoutes添加完毕后才能进行）
        //     if (whiteRoutes.some(reg => reg.test(to.fullPath))) {
        //         next();
        //         return;
        //     }
        //     // 如果openId已存在
        //     if (store.getters.apiToken) {
        //         // 如果已经有用户apiToken
        //         if (store.getters.user) {
        //             next();
        //         } else {
        //             // 如果没有用户信息
        //             store.dispatch('GetUserInfo').then(resp => {
        //                 // 如果已经有用户信息
        //                 if (store.getters.appType === 'vol' && store.getters.user.completion == 0) {
        //                     // 如果目标进入的不是完善信息页面，要带上callback
        //                     // 如果是志愿者，并且信息未完善，进入完善信息页面
        //                     if (to.fullPath !== '/volunteer/perfect_info') {
        //                         router.push({
        //                             path: '/volunteer/perfect_info',
        //                             query: {
        //                                 callback: to.fullPath
        //                             }
        //                         });
        //                     } else {
        //                         next({
        //                             ...to,
        //                             replace: false
        //                         });
        //                     }
        //                 } else {
        //                     next({
        //                         ...to,
        //                         replace: false
        //                     });
        //                 }
        //             }).catch(error => {
        //                 // 如果没有绑定用户，根据当前appType跳转至对应【绑定用户页面】
        //                 if (store.getters.appType === 'vol') {
        //                     router.push({
        //                         path: '/volunteer/login',
        //                         query: {
        //                             callback: to.fullPath
        //                         }
        //                     });
        //                 } else {
        //                     router.push({
        //                         path: '/org/login',
        //                         query: {
        //                             callback: to.fullPath
        //                         }
        //                     });
        //                 }
        //             });
        //         }
        //     } else {
        //         // 如果没有用户apiToken，则获取用户apiToken（查找绑定账号）
        //         store.dispatch('GetBindUser').then(() => {
        //             next({
        //                 ...to,
        //                 replace: true
        //             });
        //         }).catch(error => {
        //             // 如果没有绑定用户，根据当前appType跳转至对应【绑定用户页面】
        //             if (store.getters.appType === 'vol') {
        //                 router.push({
        //                     path: '/volunteer/login',
        //                     query: {
        //                         callback: to.fullPath
        //                     }
        //                 });
        //             } else {
        //                 router.push({
        //                     path: '/org/login',
        //                     query: {
        //                         callback: to.fullPath
        //                     }
        //                 });
        //             }
        //         });
        //     }
        // });
    } else {
        // 如果路由没有过滤添加
        store.dispatch('GenerateRoutes').then(routes => {
            router.addRoutes(routes);
            next({
                ...to,
                replace: true
            });
        });
    }
});

console.log('~~~~~~~~~~~~~~~~~~~~~~store', store);
