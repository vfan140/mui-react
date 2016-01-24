require('css/form.scss');

var React = require('react');

var Textarea = React.createClass({
    render : function(){
        return (
            <div className = 'muiField'>
                <div className = 'muiFieldItem'>
                    <div className  = 'muiFieldValue'>
                        <textarea className = 'muiFormTextarea' {...this.props}></textarea>
                    </div>
                    <div className = 'muiFieldOpt'>
                        <i className = 'mui mui-insert mui-rotate-45'></i>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Textarea;
