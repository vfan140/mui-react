require('css/loading.scss');

var React = require('react');

var Loading = React.createClass({

	render : function(){
		return (
			<div className = 'muiLoading'>
				<div className = 'muiLodingRound1'></div>
				<div className = 'muiLodingRound2'></div>
				<div className = 'muiLodingRound3'></div>
			</div>
		);
	}

});

module.exports = Loading;