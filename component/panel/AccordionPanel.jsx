require('css/panel.scss');

var React = require('react'),
    ReactDOM = require('react-dom'),
    _SliderPanelMixin = require('./_SliderPanelMixin.jsx');


var AccordionPanel = React.createClass({

    mixins : [_SliderPanelMixin],

    render : function(){
        return (
            <div className = 'muiAccordionPanelWrapper' ref='wrapper'>
                <div className='muiAccordionPanel'>
                    {
                        React.Children.map(this.props.children, this.renderContent)
                    }
                </div>
            </div>
        );
    },

    renderContent: function(child,index){
        var self = this,
            props = {
                ref : child.type.displayName + index ,
                onClick : function(){
                    self.slide();
                    self.___sliderPanelChildIndex = index;
                }
            };
        return React.cloneElement(child,props);
    },

    getWrapperDOMNode : function(){
        return ReactDOM.findDOMNode(this.refs['wrapper']) || document.body;
    }


});


module.exports = AccordionPanel;
