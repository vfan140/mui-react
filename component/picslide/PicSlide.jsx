require('css/picslide.scss');

var React = require('react'),
	PicItem = require('./PicItem.jsx');

var PicSlide = React.createClass({

	getDefaultProps : function(){
		return {
			datas : []
		};
	},

	getInitialState : function(){
		return {
			curNumber : 0,
			translateX : 0//偏移百分比
		};
	},

	render : function(){
		var self = this;
		return (
			<div className = 'muiPicSlide' ref = 'muiPicSlide'>
				<div className = 'muiPicslidePaging'>
					<span className = 'muiPicslideCur'>
						{ this.state.curNumber + 1 }
					</span>/
					<span className = 'muiPicslideTotal'>
						{ this.props.datas.length }
					</span>
				</div>
				<div className = 'muiPicslideTitle'>

				</div>
				{
					this.props.datas.map(function(data,index){
						return self.renderPicSlideItem(data,index);
					})
				}
			</div>
		);
	},

	renderPicSlideItem : function(data,index){
		var key = 'picslideItem' + index,
			translateX = (index - this.state.curNumber ) * 100 + this.state.translateX,
			style = {
				transform : 'translateX(' + translateX + '%)'
			};
		return (
			<div className = 'muiPicslideItemContanier' key = {key} style = {style} 
				onTouchStart = {this.handleOnTouchStart}
				onTouchMove = {this.handleOnTouchMove}
				onTouchEnd = {this.handleOnTouchEnd} >
				<PicItem data = {data}></PicItem>
			</div>
		);
	},

	handleOnTouchStart : function(evt){
		evt.preventDefault();
		if(this.swaping)
			return;
		this.swaping = true;
		var touch = evt.touches[0];
        this.startPosition = {
        	x: touch.pageX,
            y: touch.pageY
        };
	},

	handleOnTouchMove : function(evt){
		evt.preventDefault();
		if(!this.swaping)
			return;
		var touch = evt.touches[0];
        this.currentPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        var dom = this.refs['muiPicSlide'],
			width = dom.getBoundingClientRect()['width'],
			translateX = (this.currentPosition.x - this.startPosition.x) / width * 100;
		this.setState({
        	translateX : translateX
        });
	},

	handleOnTouchEnd : function(evt){
		evt.preventDefault();
		if(!this.swaping)
			return;
		var dom = this.refs['muiPicSlide'],
			width = dom.getBoundingClientRect()['width'],
			dx = this.currentPosition.x - this.startPosition.x,
			curNumber = this.state.curNumber;
		if(Math.abs(dx) > width/4 ){
			if(dx > 0){
				curNumber = this.state.curNumber - 1 > 0 ? this.state.curNumber - 1 : 0;
			}else{
				var maxIndex = this.props.datas.length - 1;
				curNumber = this.state.curNumber + 1 < maxIndex ? this.state.curNumber + 1 :  maxIndex;
			}
		}
		this.setState({
			translateX : 0,
			curNumber : curNumber
		});
		this.swaping = false;
	}

});

module.exports = PicSlide;
