const getters = {
    // user
    apiToken: state => state.user.apiToken,
    user: state => state.user.user,

    // wx
    wxOpenId: state => state.wx.wxOpenId,

    // permission
    accessRoutes: state => state.permission.accessRoutes
};

export default getters;
