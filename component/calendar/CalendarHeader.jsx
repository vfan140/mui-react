var React = require('react'),
    moment = require('moment');

var CalendarHeader = React.createClass({

    getDefaultProps : function(){
        return {
            mode : 'month', //日历模式:月模式(month)、周模式(week)
            date : new Date() //当前所中日期
        };
    },

    render : function(){
        return (
            <div className = 'muiCalendarHead'>
                <div className = 'muiCalendarHeadFirst'></div>
                <div className = 'muiCalendarHeadLast'>
                    {
                        !moment(this.props.date).isSame(new Date(),'day') ?
                        <span className = 'muiTodayNode' onClick={this.props.todayHanlder}>今</span> : ''
                    }
                </div>
                <div className = 'muiCalendarHeadContent'>
                    <span className = 'mui mui-back' onClick={this.props.preHandler}></span>
                    <span>
                        {
                            this.props.mode == 'month' ? this.renderMonthStr() : this.renderWeekStr()
                        }
                    </span>
                    <span className = 'mui mui-forward' onClick={this.props.nextHandler}></span>
                </div>
            </div>
        );
    },

    renderMonthStr : function(){
        return moment(this.props.date).format('YYYY年M月');
    },

    renderWeekStr : function(){
        return moment(this.props.date).format('YYYY年第W周');
    }

});

module.exports = CalendarHeader;
