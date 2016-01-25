require('css/container.scss');

var React = require('react'),
    classSet = require('react-addons').classSet;

var Container = React.createClass({

    getDefaultProps : function(){
        return {
            component : 'div',
            direction : 'column',
            fill : true
        };
    },

    render : function(){
        var Component = this.props.component,
            classes = classSet({
                'muiContainer' : true,
                'muiContainerFill' : this.props.fill,
                'muiContainerColumn' : this.props.direction === 'column',
                'muiContainerRow' : this.props.direction === 'row'
            });
        return (
            <Component className = {classes}>
                {this.props.children}
            </Component>
        );
    }

});

module.exports  = Container;
