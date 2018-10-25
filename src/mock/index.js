import Mock from 'mockjs';

import wx from './modules/wx';
import user from './modules/user';

// wx
Mock.mock(/wx\/openid/, 'get', wx.getOpenId);

// user
Mock.mock(/user\/bind/, 'get', user.getBindUser);
Mock.mock(/user\/info/, 'get', user.getUserInfo);


