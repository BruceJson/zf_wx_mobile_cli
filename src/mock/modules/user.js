export default {
    getBindUser() {
        return {
            state: '1',
            message: '获取绑定的用户成功~~',
            data: {
                token: '123213231231213213213'
            }
        };
    },
    getUserInfo() {
        return {
            state: '1',
            message: '获取用户信息成功~~',
            data: {
                name: 'user'
            }
        };
    }
};
