require('css/form.scss');

var React = require('react');

var RadioGroup = React.createClass({

    getInitialState : function(){
        return {
            value : this.props.initialValue
        };
    },

    render : function(){
        return (
            <div className = 'muiField'>
                <div className = 'muiFieldItem'>
                    <div className = 'muiFieldValue'>
                        {
                            React.Children.map(this.props.children, this.renderRadio)
                        }
                    </div>
                </div>
            </div>
        );
    },

    renderRadio : function(child){
        var props = {
            name : this.props.name,
            groupValue : this.state.value,
            radioClick : this.handleRadioClick
        };
        return React.cloneElement(child,props);
    },

    handleRadioClick : function(value){
        this.setState({
            value : value
        });
    }

});

module.exports = RadioGroup;
