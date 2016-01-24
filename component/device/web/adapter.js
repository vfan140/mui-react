'use strict';
/*
 * 用于web客户端对应功能接口调用
 */
module.exports = {
    goBack: function() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location = '/';
        }
        return {};
    }
};
