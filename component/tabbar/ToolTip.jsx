var React = require('react'),
    classSet = require('react-addons').classSet,
    TabBarButton = require('./TabBarButton.jsx'),
    assign = require('object-assign');

var ToolTip = React.createClass({

    getInitialState : function(){
        return {
            show : false
        };
    },

    render : function(){
        var self = this;
        var classes = classSet({
            'muiToolTip' : true,
            'muiToolTipVisible' : this.state.show,
            'muiToolTipHidden' : !this.state.show
        });
        var style = {};
        ['top','left','bottom','right'].forEach(function(position){
            if(!isNaN(this.props[position])){
                style[position] = this.props[position];
            }
        },this);
        return (
            <div className = {classes} style = {style}>
                <div className = 'muiTooltipAnchor'>
                    <div className = 'muiToolTipArrow'></div>
                    <div className = 'muiToolTipInnerArrow'></div>
                </div>
                <div className = 'muiTooltipContainer'>
                    {
                        React.Children.map(this.props.children,this.renderButton)
                    }
                </div>
            </div>
        );
    },

    renderButton : function(child){
        return (
            <TabBarButton {...child.props}></TabBarButton>
        );
    }

});

module.exports = ToolTip;
