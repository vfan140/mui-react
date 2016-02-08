require('css/picslide.scss');

var React = require('react'),
	ReactDOM = require('react-dom'),
	PicSlide = require('./PicSlide.jsx');

var PicSlideTrigger = React.createClass({

	getDefaultProps : function(){
		return {
			datas : []
		};
	},

	render : function(){
		var child = React.Children.only(this.props.children),
			props = {
				onClick : this.handleTriggerClick
			};
		return React.cloneElement(child,props);
	},

	handleTriggerClick : function(){
		if(!this._wrapper){
			this.renderWrapper();
		}
		ReactDOM.render(<PicSlide datas = {this.props.datas}></PicSlide>,this._wrapper);
	},

	renderWrapper : function(){
		this._wrapper = document.createElement('div');
		this._wrapper.className = 'muiPicSlideContainer';
		this.getContainerDOMNode().appendChild(this._wrapper);
	},

	getContainerDOMNode : function(){
		return ReactDOM.findDOMNode(this.props.container) || document.body;
	}

});

module.exports = PicSlideTrigger;
