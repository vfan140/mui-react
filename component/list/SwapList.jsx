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

	render : function(){
		var className = classset({
			'muiSwapListContanier' : true,
			'hidden' : !this.props.selected
		});
		return (
			<div className = {className}>
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
	},

	handleOnTouchMove : function(){

	},

	handleOnTouchEnd : function(){

	}

});

module.exports = SwapList;