export default [{
    path: '*',
    meta: {
        title: '页面未找到'
    },
    redirect: '/error_404'
}, {
    path: '/error_401',
    name: 'error_401',
    meta: {
        title: '无权限'
    },
    component: () =>
        import ('@/views/errors/401')
}, {
    path: '/error_404',
    name: 'error_404',
    meta: {
        title: '页面未找到'
    },
    component: () =>
        import ('@/views/errors/404')
}]
