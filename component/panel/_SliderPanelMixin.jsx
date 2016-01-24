var React = require('react'),
    ReactDOM = require('react-dom'),
    SlidePanel = require('./SlidePanel.jsx'),
    IScroll = require('iscroll/build/iscroll');

var _SliderPanelMixin = {

    ___sliderPanelChildIndex : 0,

    ___sliderPanelChildList : [],

    componentDidMount : function(){
        this._buildSliderPanel();
    },

    _buildSliderPanel : function(){
        var self = this;
        if(!this.___isrcoll){
            var wrapper = this.getWrapperDOMNode ? this.getWrapperDOMNode() : document.body;
            this.___isrcoll = new IScroll(wrapper,{
                preventDefault : false
            });
        }
        React.Children.forEach(this.props.children,function(child,index){
            var ref  = child.type.displayName + index,
                childComponent = self.refs[ref],
                childDom = ReactDOM.findDOMNode(childComponent);
            self.___sliderPanelChildList.push({
                title : child.props.title,
                onClick : self.clickMethod(childDom)
            });
        });
        this.slidePanel = <SlidePanel store={self.___sliderPanelChildList}></SlidePanel>;
    },

    slide: function(){
        var self = this;
        this._muiPanelOverlay = document.createElement('div');
        this._muiPanelOverlay.className = 'muiPanelOverlay';
        document.body.appendChild(this._muiPanelOverlay);
        this._muiPanelOverlay.onclick = function(){
            self.slideOut();
        };
        this.slidePanelInstance = ReactDOM.render(
            this.slidePanel,
            this._muiPanelOverlay
        );
        setTimeout(function(){
            self.slidePanelInstance.setState({
                hasSlide : true,
                index : self.___sliderPanelChildIndex
            });
        },100);
    },

    slideOut : function(){
        var self = this;
        this.slidePanelInstance.setState({
            hasSlide : false
        });
        setTimeout(function(){
            document.body.removeChild(self._muiPanelOverlay);
            self._muiPanelOverlay = null;
        },500);
    },

    clickMethod : function(dom){
        var self = this;
        return function(){
            self.___isrcoll.scrollToElement(dom);
        };
    }


};

module.exports = _SliderPanelMixin;
