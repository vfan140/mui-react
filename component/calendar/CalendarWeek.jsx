var React = require('react'),
    classSet = require('react-addons').classSet,
    ReactDOM = require('react-dom'),
    moment = require('moment');

var CalendarWeek = React.createClass({

    getDefaultProps : function(){
        return {
            firstDayInWeek : 0, //本周第一天,0为星期天
            date : new Date(),
            translateY : null
        };
    },

    render : function(){
        var style = {};
        if(this.props.translateY !== null){
            style['transform'] = 'translate3d(0px, '+ this.props.translateY +'px, 0px)'
        }
        return (
            <table className = 'muiCalendarTable muiCalendarWeekTable' style = {style}>
                <thead>
                    <tr className = 'muiCalendarWeekHead'>
                        { moment.weekdaysMin().map(this.renderWeekHead) }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        { this.renderBody() }
                    </tr>
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

    renderBody : function(){
        var date = this.props.date.getDate(),
            day = this.props.date.getDay(),
            today = new Date();
        return [0,1,2,3,4,5,6].map(function(index){
            var _date = new Date(this.props.date);
			_date.setDate(date - day + index);
            var className = classSet({
                //默认样式
                'muiCalendarDate' : true,
                //节假日
                'muiCalendarHoliday' : _date.getDay == 0 || _date.getDay == 6,
                //上个月
                'muiCalendarDatePre' :  moment(_date).isBefore(this.props.date,'month'),
                //下个月
                'muiCalendarDateNext' :  moment(_date).isAfter(this.props.date,'month'),
                //本月
                'muiCalendarDateCurr' :  moment(_date).isSame(this.props.date,'month'),
                //是否当前选中日期
                'muiCalendarDateSelected' : moment(_date).isSame(this.props.date,'day'),
                //是否今天
                'muiCalendarCurrentDate' :  moment(_date).isSame(new Date(),'day')
            });
            return (
                <td key={index} onClick={this.props.tapHandle.bind(this,_date)}>
                    <span className = {className}>{_date.getDate()}</span>
                </td>
            );
        },this);
    }

});

module.exports = CalendarWeek;
