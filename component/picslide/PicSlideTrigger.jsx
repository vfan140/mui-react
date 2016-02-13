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
			ReactDOM.render(<PicSlide datas = {this.props.datas} onClick = {this.handleClose}></PicSlide>,this._wrapper);
		}
		this._wrapper.className = 'muiPicSlideContainer visible';
	},

	renderWrapper : function(){
		this._wrapper = document.createElement('div');
		this._wrapper.className = 'muiPicSlideContainer';
		this.getContainerDOMNode().appendChild(this._wrapper);
	},

	handleClose : function(){
		this._wrapper.className = 'muiPicSlideContainer hidden';
	},

	getContainerDOMNode : function(){
		return ReactDOM.findDOMNode(this.props.container) || document.body;
	}

});

module.exports = PicSlideTrigger;
