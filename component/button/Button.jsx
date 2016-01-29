require('css/button.scss');

var React = require('react');

var TabBarButton = React.createClass({

    getDefaultProps : function(){
        return {
            buttonClass : 'mui-btn-default'
        };
    },
    
    render : function(){
        var baseClass = ['muiButton',this.props.buttonClass].join(' '),
            iconClass = ['mui',this.props.iconClass].join(' ');
        return (
            <div className = {baseClass} onClick = {this.props.onClick}>
                {
                    this.props.iconClass ?
                    <div className = 'muiButtonIconArea'>
                        <i className={iconClass}></i>
                    </div> :
                    ''
                }
                <div className = 'muiButtonLabel'>
                    {this.props.title}
                </div>
            </div>
        );
    }
});


module.exports = TabBarButton;
