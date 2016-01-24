require('css/header.scss');

var React = require('react');

var Header = React.createClass({

    render : function(){
        var style = {};
        if(this.props.width){
            style.width = this.props.width;
        }
        if(this.props.height){
            style.height = this.props.height;
        }
        return (
            <div className = 'muiHeader' style={style}>
                {
                    React.Children.map(this.props.children,this.renderChild)
                }
            </div>
        );
    },

    renderChild : function(child){
        var className = child.props.className || '';
        className += ' muiHeaderItem';
        return React.cloneElement(child,{
            className : className
        });
    }

});

module.exports = Header;
