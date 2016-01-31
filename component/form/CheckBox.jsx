require('css/form.scss');

var React = require('react'),
    classSet = require('react-classset');

var CheckBox = React.createClass({

    render : function(){
        var overlayClass = classSet({
                'muiFormCheckBoxOverlay':true,
                'mui':true,
                'mui-checked':this.props.checked
            }),
            checked = this.props.checked ? 'checked' : ''
        return (
            <div className = 'muiField muiFormOptionsField'>
                <div className = 'muiFieldOptions'>
                    <div className = 'muiFormCheckBox'>
                        <div className = {overlayClass}></div>
                        <input type='checkbox' {...this.props} onChange = {this.handleOnChange}/>
                    </div>
                    <div className = 'muiFieldText'>{this.props.text}</div>
                </div>
            </div>
        );
    },

    handleOnChange : function(evt){
        this.props.checkboxClick(this.props.value);
        if(this.props.onChange){
            this.props.onChange(evt);
        }
    }


});


module.exports = CheckBox;
