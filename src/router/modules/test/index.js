var routes = [{
    path: '',
    redirect: '/test'
}, {
    path: '/test',
    children: [{
        path: '',
        redirect: 'helloworld'
    }, {
        path: 'helloworld',
        name: 'helloworld',
        component: () =>
            import ('@/views/test/helloworld')
    }],
    component: () =>
        import ('@/views/layout/layout')
}]
export default routes;
