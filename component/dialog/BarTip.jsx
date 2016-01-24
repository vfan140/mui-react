'use strict';

require('css/dialog.scss');

var React = require('react'),
    _DialogMixin = require('./_DialogMixin.jsx');

var BarTip = React.createClass({

    mixins : [_DialogMixin],

    render : function(){
        return(
            <div className = 'muiDialogBarTip' ref= 'muiDialog'>
                <div className = 'containerNode'>
                    <div className = 'iconNode'>
                        <i className = 'mui mui-label'></i>
                    </div>
                    {
                        this.props.content ?
                        this.props.content :
                        React.Children.map(this.props.children, this.renderContent)
                    }
                    <div className = 'closeNode' onClick ={this.handleClose}>
                        <i className = 'mui mui-close'></i>
                    </div>
                </div>
            </div>
        );
    },

    renderContent : function(child){
        return React.cloneElement(child,{});
    },

    handleClose : function(){
        var dom = this.props.container ? this.props.container :  this.refs['muiDialog'];
        this.destory(dom);
    }

});

module.exports = BarTip;
