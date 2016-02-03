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
	        defaultDatas : [],	//数据来源,如果url中存在数据,会叠加
	        defaultItemIndex : 0
	    };
	},

	getInitialState : function(){
		return {
			itemIndex : this.props.defaultItemIndex,
			datas : this.props.defaultDatas
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
					this.state.datas.map(function(data,index){
						return self.renderSwapList(data,index);
					})
				}
			</div>
		);
	},

	renderNavBar : function(){
		var props = {
			defaultdatas : this.state.datas,
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
			defaultDatas : data.list || [],
			selected : index === this.state.itemIndex,
			handleSwapEnd : this.handleSwapEnd,
			index : index
		};
		var key = 'swapList' + index;
		return (
			<SwapList {...props} key={key}></SwapList>
		);
	},

	handleSwapMove : function(index,nextIndex){

	},

	handleSwapEnd : function(index){
		var length = this.state.datas.length;
		if(index < 0){
			index = 0;
		}
		if(index >= length){
			index = length -1;
		}
		this.setState({
			itemIndex : index
		});
	}

});

module.exports = NavSwapList;