var React = require('react'),
    ReactDOM = require('react-dom'),
    Box = require('../utils/box.js');

var _DialogMixin = {

    position : function(dom){
        return {
            top : ( Box.height(window) - Box.height(dom) ) /2,
            left : ( Box.width(window) - Box.width(dom) ) /2
        };
    },

    destory : function(dom){
        ReactDOM.unmountComponentAtNode(dom);
        dom.remove();
    }

};

module.exports = _DialogMixin;
