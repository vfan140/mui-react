require('css/form.scss');

var React = require('react');

var Input = React.createClass({

    render : function(){
        return (
            <div className = 'muiField'>
                <div className = 'muiFieldItem'>
                    <div className = 'muiFieldValue'>
                        <input className = 'muiFormInput' {...this.props}></input>
                    </div>
                    <div className = 'muiFieldOpt'>
                        <i className = 'mui mui-insert mui-rotate-45'></i>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Input;
