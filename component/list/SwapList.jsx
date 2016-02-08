var React = require('react'),
	List = require('./List.jsx'),
	TextItem = require('./item/TextItem.jsx'),
	classset = require('react-classset');

var SwapList = React.createClass({

	propTypes : {
		component : React.PropTypes.node,
		itemComponent : React.PropTypes.node,
		datas : React.PropTypes.array
	},

	getDefaultProps : function(){
		return {
	    	component : 'ul',	//列表顶层元素,默认使用ul
	    	itemComponent :'li',	//列表子元素顶层元素,默认使用li
	        item :  TextItem,	//列表子元素，默认选用TextItem
	        datas : [],

	        //偏移百分比,0为0%
	        translateX : 0

	    };
	},

	getInitialState : function(){
		var translateX = !isNaN(this.props.defaultTranslateX) ? this.props.defaultTranslateX : this.props.translateX;
		return {
			translateX : translateX
		};
	},

	componentWillReceiveProps : function(nextProps){
		if(nextProps.translateX !=null && nextProps.translateX != this.props.translateX){
			this.setState({
				translateX : nextProps.translateX
			});
		}
	},

	render : function(){
		var className = classset({
			'muiSwapListContanier' : true
		});
		var style = {
			'transform' : 'translateX(' + this.state.translateX + '%)'
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
		if(!this.swaping)
			return;
		var touch = evt.touches[0];
        this.currentPosition = {
            x: touch.pageX,
            y: touch.pageY
        };
        var dom = this.refs['swapList'],
			width = dom.getBoundingClientRect()['width'],
			translateX = (this.currentPosition.x - this.startPosition.x) / width * 100;
		if(this.props.handleSwapMove && !isNaN(this.props.index)){
			this.props.handleSwapMove(this.props.index,translateX);
		}else{
			 this.setState({
        		translateX : translateX
        	});
		}
	},

	handleOnTouchEnd : function(evt){
		evt.preventDefault();
		if(!this.swaping)
			return;
		var dom = this.refs['swapList'],
			width = dom.getBoundingClientRect()['width'];
		if(this.props.handleSwapEnd && !isNaN(this.props.index)){
			var dx = this.currentPosition.x - this.startPosition.x;
			if(Math.abs(dx) > width/4 ){
				if(dx > 0){
					this.props.handleSwapEnd(this.props.index - 1);
				}else{
					this.props.handleSwapEnd(this.props.index + 1);
				}
			}else{
				this.props.handleSwapEnd(this.props.index);
			}
		}else{
			this.setState({
				translateX : 0
			});	
		}
		this.swaping = false;
	}

});

module.exports = SwapList;