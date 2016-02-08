var React = require('react');

var PicItem = React.createClass({

	getDefaultProps : function(){
		return {
			data : {}
		};
	},

	render : function(){
		return (
			<div className = 'muiPicslideItem'>
				<img className = 'muiListPicItemImg' src = {this.props.data.img} />
			</div>
		);
	}

});

module.exports = PicItem;