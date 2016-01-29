require('css/container.scss');

var React = require('react'),
    CSSTransitionGroup = require('react-addons').CSSTransitionGroup,
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
        var classes = classSet({
            'muiContainer' : true,
            'muiContainerFill' : this.props.fill,
            'muiContainerColumn' : this.props.direction === 'column',
            'muiContainerRow' : this.props.direction === 'row'
        });
        if(this.props.transition){
            var transitionName = 'muiContainer-transition-' + this.props.transition;
            return (
                <CSSTransitionGroup
                    className = {classes}
                    transitionName = {transitionName}
                    component={this.props.component}>
                    {this.props.children}
                </CSSTransitionGroup>
            );
        }
        var Component = this.props.component;
        return (
            <Component className = {classes}>
                {this.props.children}
            </Component>
        );
    }

});

module.exports  = Container;
