var React = require('react'),
    TabBarButton = require('./TabBarButton.jsx'),
    adapter = require('../device/adapter.js');


var BackButton = React.createClass({

    getDefaultProps : function(){
        return {
            buttonClass : 'mui-btn-default'
        };
    },
    
    render : function(){
        return (
            <TabBarButton {...this.props} onClick={this.handleBack}></TabBarButton>
        );
    },

    handleBack : function(){
        adapter.goBack();
    }

});


module.exports = BackButton;
