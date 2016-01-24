var React = require('react'),
    moment = require('moment');

var CalendarBottom = React.createClass({

    getDefaultProps : function(){
        return {
            date : new Date(),
            slideTop : 0 //切换日历时手指所在位置(0:最底部,相当于完全月模式,>0向上滑动,在切换到周模式过程中)
        };
    },

    render : function(){
        var style = {
            transform : 'translate3d(0px, -'+ this.props.slideTop +'px, 0px)'
        };
        return (
            <div className = 'muiCalendarBottom' style = {style}
                onTouchStart = {this.props.touchStartHandle}
                onTouchMove = {this.props.touchMoveHandle}
                onTouchEnd = {this.props.touchEndHandle}
                >
                <div className = 'muiCalendarOpt'>
                    <div className = 'muiCalendarBottomLeft'>
                        { this.props.date.getDate() }
                    </div>
                    <div className = 'muiCalendarBottomCenter'>
                        <div>
                            { moment(this.props.date).format('YYYY.MM') }
                        </div>
                        <div className = 'muiCalendarBottomInfo'>
                            <div>
                                { moment.weekdays(this.props.date.getDay()) }
                            </div>
                            <div>
                                { moment(this.props.date).fromNow() }
                            </div>
                        </div>
                    </div>
                    <div className = 'muiCalendarBottomRight'></div>
                </div>
                <div className = 'muiCalendarBottomContent'></div>
            </div>
        );
    }

});

module.exports = CalendarBottom;
