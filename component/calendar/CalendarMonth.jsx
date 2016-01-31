var React = require('react'),
    ReactDOM = require('react-dom'),
    classSet = require('react-classset'),
    moment = require('moment');

var CalendarMonth = React.createClass({

    getDefaultProps : function(){
        return {
            firstDayInWeek : 0, //本周第一天,0为星期天
            date : new Date(),
            scale : 1
        };
    },

    render : function(){
        var style  = {
            transform : 'scale(' +  this.props.scale + ')'
        };
        return (
            <table className = 'muiCalendarTable' style = {style}>
                <thead>
                    <tr className = 'muiCalendarWeekHead'>
                        { moment.weekdaysMin().map(this.renderWeekHead) }
                    </tr>
                </thead>
                <tbody>
                    { this.renderDayBody() }
                </tbody>
            </table>
        );
    },

    renderWeekHead : function(day){
        return (
            <th key = {day}>
                <span>{day}</span>
            </th>
        );
    },

    renderDayBody : function(){
        var date = new Date(this.props.date),
            today = new Date();
        date.setDate(1);
        // 本月第一天星期几
    	var firstDayInMonth = (date.getDay() - this.props.firstDayInWeek + 7) % 7;
        // 本月多少天
        var daysInMonth = moment(date).daysInMonth();
        // 上个月多少天
        var daysInPreviousMonth = moment(date).subtract(1,'months').daysInMonth();
        return [0,1,2,3,4,5].map(function(row){
            return (
                <tr key = {row}>
                    {[0,1,2,3,4,5,6].map(function(column){
                        var index = row * 7 + column;
                        var number, _date = new Date(date), sym;
						if (index < firstDayInMonth) {// 前
							number = daysInPreviousMonth - firstDayInMonth + index + 1;
							sym = 'Pre';
                            _date = moment(_date).subtract(1,'months').toDate();
						} else if (index >= (firstDayInMonth + daysInMonth)) {// 下
							number = index - firstDayInMonth
									- daysInMonth + 1;
							sym = 'Next';
                            _date = moment(_date).add(1,'months').toDate();
						} else {// 当前
							number = index - firstDayInMonth + 1;
							sym = 'Curr';
						}
                        _date.setDate(number);
                        var className = classSet({
                            //默认样式
                            'muiCalendarDate' : true,
                            //上个月
                            'muiCalendarDatePre' :  sym === 'Pre',
                            //下个月
                            'muiCalendarDateNext' :  sym === 'Next',
                            //本月
                            'muiCalendarDateCurr' : sym === 'Curr',
                            //周六、日字体显示为蓝色
                            'muiCalendarHoliday' : _date.getDay() == 0 || _date.getDay() == 6,
                            //是否当前选中日期
                            'muiCalendarDateSelected' : moment(_date).isSame(this.props.date,'day'),
                            //是否今天
                            'muiCalendarCurrentDate' :  moment(_date).isSame(new Date(),'day')
                        });
                        return (
                            <td key={index} onClick={this.props.tapHandle.bind(this,_date)}>
                                <span className = {className}>{number}</span>
                            </td>
                        );
                    },this)}
                </tr>
            );
        },this);
    }

});

module.exports = CalendarMonth;
