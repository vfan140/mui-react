'use strict'

require('css/dialog.scss');

var React = require('react'),
    ReactDOM = require('react-dom'),
    _DialogMixin = require('./_DialogMixin.jsx');

var Tip = React.createClass({

    mixins : [_DialogMixin],

    getDefaultProps : function(){
        return {
            time : 1000,
            icon : 'mui-success'
        };
    },

    getInitialState : function(){
        return {
            top : 0
        };
    },

    render : function(){
        var style = {
            top : this.state.top
        };
        var icon = 'mui '+this.props.icon;
        return (
            <div className = 'muiDialogTip' ref='muiDialog' style={style}>
                <div className = 'muiDialogTipContaner'>
                    <div className = 'muiDialogTipIcon'>
                        <div className = {icon}></div>
                    </div>
                    <div className = 'muiDialogTipText'>
                        <span>{this.props.content}</span>
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount :function(){
        var dom = this.refs['muiDialog'],
            __position = this.position(dom),
            self = this;
        this.setState({
            top : __position.top
        });
        setTimeout(function(){
            var container = self.props.container ? self.props.container :
            self.destory(container);
        },this.props.time);
    }

});

module.exports = Tip;
