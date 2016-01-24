'use strict';
/**
 * 宽高位置获取工具,可以获取对象的width、height、top、left等属性
 */
var Type = require('./type.js');

/**
 * 宽高判断:对于window对象使用innerXXX,对于document对象使用scrollXXX,对于DOM使用getBoundingClientRect
 */
function getWidthOrHeigth(obj, name) {
    var property =
        name.replace(/./, function(m) {
            return m[0].toUpperCase();
        });
    return !obj ? 0 : Type.isWindow(obj) ? obj['inner' + property] : Type.isDocument(
        obj) ? obj.documentElement['scroll' + property] : Math.round(
        obj.getBoundingClientRect()[name]);
}

module.exports = {
    width: function(obj) {
        return getWidthOrHeigth(obj, 'width');
    },

    height: function(obj) {
        return getWidthOrHeigth(obj, 'height');
    }
};
