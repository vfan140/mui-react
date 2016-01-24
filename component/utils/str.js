'use strict';
/**
 *  字符处理工具,提供字符串截取、字符串特殊字符转换等API
 */
module.exports = {

    decodeText: function(str) {
        if (str === null || str.length === 0) {
            return '';
        }
        return str.replace(/&quot;/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&amp;/g, '&');
    },

    encodeText: function(str) {
        if (str === null || str.length === 0) {
            return '';
        }
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\"/g, '&quot;');
    },

    textEllipsis: function(str, num) {
        if (str) {
            if (str.length * 2 <= num) {
                return str;
            }
            var rtnLength = 0;
            for (var i = 0; i < str.length; i++) {
                if (Math.abs(str.charCodeAt(i)) > 200) {
                    rtnLength = rtnLength + 2;
                } else {
                    rtnLength++;
                }
                if (rtnLength > num) {
                    return str.substring(0, i) + (rtnLength % 2 === 0 ?
                        '..' : '...');
                }

            }
            return str;
        }
    }

};
