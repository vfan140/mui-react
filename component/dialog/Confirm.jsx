'use strict';

require('css/dialog.scss');

var React = require('react'),
    ReactDOM = require('react-dom'),
    _DialogMixin = require('./_DialogMixin.jsx');

var Confirm = React.createClass({

    mixins : [_DialogMixin],

    getDefaultProps : function(){
        return {
            title : '提示',
            canClose : true
        };
    },

    getInitialState : function(){
        return {
            top : 0,
            left : 0
        };
    },

    render : function(){
        var style = {
            marginTop : this.state.top,
            marginLeft : this.state.left
        };
        return (
            <div className='muiDialogElement' ref='muiDialog'>
                <div className='muiDialogElementContainer' ref= 'muiDialogContainer' style={style}>
                    <div className='muiDialogElementDiv'>
                        <div className='muiDialogElementTitle'>{this.props.title}</div>
                        {
                            this.props.canClose ?
                            <i className='mui mui-close muiDialogElementClose' onClick = {this.handleClose}></i> :
                            ''
                        }
                    </div>
                    <div className='muiDialogElementContent'>
                        <div className='muiBackDialogElement'>
                            <div>{this.props.content}</div>
                        </div>
                    </div>
                    {
                        this.props.buttons && this.props.buttons.length > 0 ?
                        <div className= 'muiDialogElementButtons'>
                            {
                                this.props.buttons.map(this.renderButton)
                            }
                        </div>
                        :''
                    }
                </div>
            </div>
        );
    },

    componentDidMount : function(){
        var dom = this.refs['muiDialogContainer'],
            __position = this.position(dom);
        this.setState({
            top : __position.top,
            left : __position.left
        });
    },

    renderButton : function(button){
        return (
            <div className = 'muiDialogElementButton' key={button.title} onClick = {this.handleButton.bind(this,button.fn)}>{button.title}</div>
        );
    },

    handleButton : function(fn){
        var dom = this.props.container ? this.props.container :  this.refs['muiDialog'];
        this.destory(dom);
        if(fn){
            fn();
        }
    },

    handleClose : function(){
        var dom = this.props.container ? this.props.container : this.refs['muiDialog'];
        this.destory(dom);
    }

});

module.exports = Confirm;
