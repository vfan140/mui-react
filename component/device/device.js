'use strict';
var deviceMap = {
    PC: -1, //PC端
    WEB: 0, //移动端web浏览器
    WECHAT: 1 //微信
};

//类型，ua特征标识，是否有做接口支持
var _UA_MAP = [{
    type: deviceMap.WECHAT,
    value: 'micromessenger'
}];

//获取ua标识
var __getClientUAKey = function() {
    var ua = window.navigator.userAgent;
    ua = ua.toLowerCase();
    for (var i = 0; i < _UA_MAP.length; i++) {
        var uaObj = _UA_MAP[i];
        if (ua.indexOf(uaObj.value) > -1) {
            return uaObj;
        }
    }
    return null;
};

module.exports = {
    /**
     * 获取客户端类型
     */
    getClientType: function() {
        var ua = __getClientUAKey();
        if (ua !== null) {
            return ua.type;
        }
        return deviceMap.WEB;
    }
};
