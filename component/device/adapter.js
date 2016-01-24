var assign = require('object-assign'),
    device = require('./device.js');

var webapi = require('./web/adapter.js'),
    wechatapi = require('./wechat/adapter.js'),
    rtnApi = webapi;

var deviceType = device.getClientType();
if (deviceType === 1) { //微信
    rtnApi = assign({}, rtnApi, wechatapi);
}

module.exports = rtnApi;
