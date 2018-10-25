export default {
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        if (this.$vux.loading.isVisible()) {
            this.$vux.loading.hide();
        }
        next();
    }
};
