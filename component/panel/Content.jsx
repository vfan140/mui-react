'use strict';

require('css/panel.scss');

var React = require('react');
var Content = React.createClass({
    render : function(){
        return (
            <div className='muiAccordionPanelContainer' ref={this.props.ref}>
                <div className='muiAccordionPanelTitle'>
                    <span className='mui mui-ul' onClick={this.props.onClick}/>
                    <div>{this.props.title}</div>
                </div>
                <div className='muiAccordionPanelContent' style={{display:"block"}}>
                {
                    React.Children.map(this.props.children,function(child){
                        return <div>{child}</div>;
                    })
                }
                </div>
            </div>
        );
    }
});

module.exports = Content;
