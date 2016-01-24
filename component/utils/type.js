'use strict';
/**
 * 类型判断工具,提供类型判断、是否方法、是否对象、是否类数组等API
 */

var toString = Object.prototype.toString;

function type(obj) {
    if (!obj) {
        return String(obj);
    } else {
        var t = toString.call(obj).toLowerCase();
        return t.substring(8, t.length - 1);
    }
}

module.exports = {

    toString: toString,

    type: type,

    isObject: function(obj) {
        return type(obj) === 'object';
    },

    /**
     * 是否纯粹对象,纯粹对象是指通过{}或者new Object创建出来的
     */
    isPlainObject: function(obj) {
        return this.isObject(obj) && Object.getPrototypeOf(obj) ===
            Object.prototype;
    },

    isFunction: function(obj) {
        return type(obj) === 'function';
    },

    isWindow: function(obj) {
        return obj !== null && obj === obj.window;
    },

    isDocument: function(obj) {
        return obj !== null && obj.nodeType === obj.DOCUMENT_NODE;
    },

    isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    },

    isArray: function(obj) {
        if (Array.isArray) {
            return Array.isArray(obj);
        }
        return obj instanceof Array;
    },

    isLikeArray: function(obj) {
        return typeof(obj.length) === 'number';
    }


};
