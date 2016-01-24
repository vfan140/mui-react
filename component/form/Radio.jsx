require('css/form.scss');

var React = require('react'),
    ReactWithAddons = require('react-addons');

var Radio = React.createClass({

    render : function(){
        var cx = ReactWithAddons.classSet,
            overlayClass = cx({
                'muiFormRadioOverlay' : true,
                'mui' : true,
                'mui-radio-checked' : this.props.groupValue == this.props.value || this.props.checked,
                'mui-radio-unchecked' : this.props.groupValue && this.props.groupValue != this.props.value
            });
        return (
            <div className = 'muiField muiFormOptionsField'>
                <div className = 'muiFieldOptions'>
                    <div className = 'muiFormRadio'>
                        <div className = {overlayClass}></div>
                        <input type='radio' name={this.props.name} onChange={this.handleOnChange}></input>
                    </div>
                    <div className = 'muiFieldText'>{this.props.text}</div>
                </div>
            </div>
        );
    },

    handleOnChange : function(evt){
        this.props.radioClick(this.props.value);
        if(this.props.onChange){
            this.props.onChange(evt);
        }
    }
});

module.exports = Radio;
