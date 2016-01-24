var React = require('react'),
    type = require('../utils/type.js'),
    fn = require('../utils/fn.js');

var CheckBoxGroup = React.createClass({

    getInitialState : function(){
        var isArray = type.isArray,
            initialValue = this.props.initialValue;
        if(!isArray(initialValue)){
            initialValue = initialValue.split('[;,]');
        }
        return {
            value : initialValue || []
        };
    },

    render : function(){
        return (
            <div className = 'muiField'>
                <div className = 'muiFieldItem'>
                    <div className = 'muiFieldValue'>
                        {
                            React.Children.map(this.props.children, this.renderCheckBox)
                        }
                    </div>
                </div>
            </div>
        );
    },

    renderCheckBox : function(child){
        var value = child.props.value;
        var props = {
            name : this.props.name,
            checked : fn.contains(this.state.value,value),
            checkboxClick : this.handleCheckboxClick
        };
        return React.cloneElement(child,props);
    },

    handleCheckboxClick : function(value){
        var __value = this.state.value.slice(0);
            index = __value.indexOf(value);
        if(index > -1){
            __value.splice(index,1);
        }else{
            __value.push(value);
        }
        this.setState({
            value : __value
        });
    }

});

module.exports = CheckBoxGroup;
