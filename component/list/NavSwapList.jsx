var React = require('react'),
	SwapList = require('./SwapList.jsx'),
	TextItem = require('./item/TextItem.jsx'),
	CSSTransitionGroup = require('react-addons-css-transition-group'),
	NavBar = require('../nav/NavBar.jsx');

var NavSwapList = React.createClass({

	getDefaultProps : function(){
		return {
	    	component : 'ul',	//列表顶层元素,默认使用ul
	    	itemComponent :'li',	//列表子元素顶层元素,默认使用li
	        item :  TextItem,	//列表子元素，默认选用TextItem
	        datas : []	//数据来源,如果url中存在数据,会叠加
	    };
	},

	getInitialState : function(){
		return {
			itemIndex : 0,	//当前选中
			translateX : 0 //swapList滑动偏移百分比
		};
	},
	
	render : function(){
		var self = this;
		var transitionName = 'muiSwapList-transition-sfr';
		return (
			<div className = 'muiNavSwapListContanier'>
				{	
					this.renderNavBar()
				}
				{						
					this.props.datas.map(function(data,index){
						return self.renderSwapList(data,index);
					})
				}
			</div>
		);
	},

	renderNavBar : function(){
		var props = {
			datas : this.props.datas,
			defaultItemIndex : this.state.itemIndex,
			handleNavBar : this.handleNavBar
		};
		return (
			<NavBar {...props}></NavBar>
		);
	},
	
	handleNavBar : function(index){
		this.setState({
			itemIndex : index
		});
	},

	renderSwapList : function(data,index){
		var props = {
			component : this.props.component,
			itemComponent : this.props.itemComponent,
			item : this.props.item,
			datas : data.list || [],
			handleSwapMove : this.handleSwapMove,
			handleSwapEnd : this.handleSwapEnd,
			index : index,
			translateX : (index - this.state.itemIndex) * 100 + this.state.translateX
		};
		var key = 'swapList' + index;
		return (
			<SwapList {...props} key={key}></SwapList>
		);
	},

	handleSwapMove : function(index,translateX){
		this.setState({
			itemIndex : index,
			translateX : translateX
		});
	},

	handleSwapEnd : function(index){
		var length = this.props.datas.length;
		if(index < 0){
			index = 0;
		}
		if(index >= length){
			index = length -1;
		}
		this.setState({
			itemIndex : index,
			translateX : 0
		});
	}

});

module.exports = NavSwapList;