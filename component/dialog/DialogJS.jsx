var React = require('react'),
    ReactDOM = require('react-dom'),
    Tip = require('./Tip.jsx'),
    BarTip = require('./BarTip.jsx'),
    Confirm = require('./Confirm.jsx');

module.exports = {

    tip : function(options){
        var dialogWrapper = this.renderWrapper();
        options = options || {};
        if(!options.container){
            options.container = dialogWrapper;
        }
        ReactDOM.render(
            <Tip {...options}></Tip>,
            dialogWrapper
        );
    },

    barTip : function(options){
        var dialogWrapper = this.renderWrapper();
        options = options || {};
        if(!options.container){
            options.container = dialogWrapper;
        }
        ReactDOM.render(
            <BarTip {...options}></BarTip>,
            dialogWrapper
        );
    },

    success : function(options){
        this.tip(options);
    },

    fail : function(options){
        options = options || {};
        options.icon = 'mui-wrong';
        this.tip(options);
    },

    confirm : function(options){
        var dialogWrapper = this.renderWrapper();
        options = options || {};
        if(!options.container){
            options.container = dialogWrapper;
        }
        options.buttons = [{
            title : '确定',
            fn : function(){
                if(options.fn){
                    options.fn('success');
                }
            }
        },{
            title : '取消',
            fn : function(){
                if(options.fn){
                    options.fn('cancel');
                }
            }
        }];
        ReactDOM.render(
            <Confirm {...options}></Confirm>,
            dialogWrapper
        );
    },

    renderWrapper : function(){
        var dialogWrapper = document.createElement('div');
        document.body.appendChild(dialogWrapper);
        return dialogWrapper;
    }

}
