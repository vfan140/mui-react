var React = require('react'),
	List = require('./List.jsx'),
	TextItem = require('./item/TextItem.jsx'),
	classset = require('react-classset');

var SwapList = React.createClass({

	getDefaultProps : function(){
		return {
	    	component : 'ul',	//列表顶层元素,默认使用ul
	    	itemComponent :'li',	//列表子元素顶层元素,默认使用li
	        item :  TextItem,	//列表子元素，默认选用TextItem
	        defaultDatas : [],	//数据来源,如果url中存在数据,会叠加
	        selected : true
	    };
	},

	getInitialState : function(){
		return {
			translateX : 0
		};
	},

	render : function(){
		var className = classset({
			'muiSwapListContanier' : true,
			'hidden' : this.props.selected === false
		});
		var style = {
			'transform' : 'translateX(' + this.state.translateX + 'px)'
		};
		return (
			<div className = {className} style = {style} ref = 'swapList'>
				<List {...this.props} 
					onTouchStart = {this.handleOnTouchStart}
					onTouchMove = {this.handleOnTouchMove}
					onTouchEnd = {this.handleOnTouchEnd} >
				</List>
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
		var touch = evt.touches[0];
        this.currentPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        this.setState({
        	translateX : this.currentPosition.x - this.startPosition.x
        });
	},

	handleOnTouchEnd : function(evt){
		evt.preventDefault();
		var dom = this.refs['swapList'],
			width = dom.getBoundingClientRect()['width'];
		this.setState({
			translateX : 0
		});	
		if(this.props.handleSwapEnd && !isNaN(this.props.index)){
			var dx = this.currentPosition.x - this.startPosition.x;
			if(Math.abs(dx) > width/4 ){
				if(dx > 0){
					this.props.handleSwapEnd(this.props.index - 1);
				}else{
					this.props.handleSwapEnd(this.props.index + 1);
				}
			}
		}
		this.swaping = false;
	}

});

module.exports = SwapList;