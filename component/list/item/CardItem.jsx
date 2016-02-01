var React = require('react');

var CardItem = React.createClass({

	getDefaultProps() {
	    return {
	        component : 'li',
	        imgIcon : 'mui-bookLogo'
	    };
	},

	render : function(){
		var Component = this.props.component,
			imgClass = 'mui ' + this.props.imgIcon;
		return (
			<Component  className = 'muiListItem muiCardItem' onClick = { this.handleOnClick } {...this.props}>
				<div className = 'muiCardItemFigure'>
					<span className = 'muiCardItemFigureImg'>
						<div className = 'muiCardItemFigureImgBox'>
							<i className = { imgClass }></i>
						</div>
					</span>
					<span className = 'muiCardItemFigureSubject'>
						{ this.props.subject }
					</span>
				</div>
				{
					this.props.moreInfo && this.props.moreInfo.length > 0 ?
					<div className = 'muiCardItemMoreInfo'>

					</div>
					: ''
				}
			</Component>
		);
	},

	handleOnClick : function(){
		if(this.props.onClick){
			this.props.onClick();
		}else if(this.props.href){
			window.open(this.props.href,'_self');
		}
	}

});

module.exports = CardItem;
