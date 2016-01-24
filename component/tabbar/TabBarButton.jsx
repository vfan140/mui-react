require('css/tabbar.scss');

var React = require('react');

var TabBarButton = React.createClass({

    getDefaultProps : function(){
        return {
            node : 'span',
            iconClass : 'mui-create',
            align : 'center'
        };
    },

    render : function(){
        var Node = this.props.node,
            iconClass = ['mui',this.props.iconClass].join(' '),
            btnStyle = {
                width : this.props.width
            },
            innerStyle = {
                float : this.props.align == 'center' ? '' : this.props.align
            };
        return (
            <Node className = 'muiTabBarButton' title = {this.props.title} style={btnStyle} onClick={this.props.onClick}>
                <div className = 'muiTabBarButtonIconArea' style={innerStyle}>
                    <i className = {iconClass}></i>
                </div>
                <div className = 'muiTabBarButtonLabel' style={innerStyle}>
                    {this.props.text}
                </div>
            </Node>
        );
    }
});


module.exports = TabBarButton;
