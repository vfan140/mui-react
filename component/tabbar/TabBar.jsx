require('css/tabbar.scss');

var React = require('react'),
    TabBarButton = require('./TabBarButton.jsx'),
    TabBarButtonGroup = require('./TabBarButtonGroup.jsx'),
    assign = require('object-assign');

var TabBar = React.createClass({

    getDefaultProps : function(){
        return {
            node : 'nav'
        };
    },

    render : function(){
        var Node = this.props.node,
            width = (100/this.props.children.length) + "%";
        return (
            <Node className = 'muiTabBar'>
                {
                    React.Children.map(this.props.children,this.renderButton)
                }
            </Node>
        );
    },

    renderButton : function(child){
        var width = (100/this.props.children.length) + "%",
            props = assign({},child.props);
        props.width = width;
        return React.cloneElement(child,props);
    }

});

module.exports = TabBar;
