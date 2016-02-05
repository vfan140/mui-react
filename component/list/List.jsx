//TODO 支持url传datas
//TODO 支持无数据显示
require('css/list.scss');

var React = require('react'),
	TextItem = require('./item/TextItem.jsx'),
	IScroll = require('iscroll/build/iscroll');

var List = React.createClass({

	getDefaultProps: function(){
	    return {
	    	component : 'ul',	//列表顶层元素,默认使用ul
	    	itemComponent :'li',	//列表子元素顶层元素,默认使用li
	        item :  TextItem,	//列表子元素，默认选用TextItem
	        datas : []	//数据来源,如果url中存在数据,会叠加
	    };
	},

	render : function(){
		var self = this,
			datas = this.props.datas,
			Component = this.props.component;
		return (
			<div className = 'muiListScrollable' ref = 'muiListScrollable'
					onTouchStart = {this.props.onTouchStart}
					onTouchMove = {this.props.onTouchMove}
					onTouchEnd = {this.props.onTouchEnd}>
				<div className = 'muiListContainer'>
					<div className = 'muiRefresh'>
						{ this.renderRefresh() }
					</div>
					<Component className = 'muiListContent'>
						{
							datas.map(function(data){
								return self.renderContent(data);
							})
						}
					</Component>
					<div className = 'muiLoadMore'>
						{ this.renderLoadMore() }
					</div>
				</div>
			</div>
		);
	},

	componentDidMount : function(){
		//初始化滚动
		var wrapper = this.refs['muiListScrollable'];
		new IScroll(wrapper,{preventDefault : false});
	},

	renderContent : function(data){
		var Item = this.props.item;
		return (
			<Item {...data} key = {data.id} component = {this.props.itemComponent}></Item>	
		);
	},

	renderRefresh : function(){

	},

	renderLoadMore : function(){

	}


});

module.exports = List;