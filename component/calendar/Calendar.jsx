require('css/calendar.scss');
require('moment/locale/zh-cn.js');

var React = require('react'),
    ReactDOM = require('react-dom'),
    CalendarHeader = require('./CalendarHeader.jsx'),
    CalendarWeek = require('./CalendarWeek.jsx'),
    CalendarMonth = require('./CalendarMonth.jsx'),
    CalendarBottom = require('./CalendarBottom.jsx'),
    moment = require('moment'),
    assign = require('object-assign');

var Calendar = React.createClass({

    getDefaultProps : function(){
        return {
            canSwitch : true, //是否可以进行日历切换
            defaultMode : 'month' //默认日历模式
        };
    },

    getInitialState : function(){
        return {
            date : new Date(), //当前选中日期
            mode : this.props.defaultMode, //当前日历模式
            slideTop : 0 //切换日历时手指所在位置(0:最底部,相当于完全月模式,>0向上滑动,在切换到周模式过程中)
        };
    },

    componentWillMount : function(){
        moment.locale('zh-cn');
    },

    render : function(){
        var commonProps = {
            date : this.state.date,
            slideTop : this.state.slideTop,
            mode : this.state.mode
        };
        var headerProps = assign({},commonProps, this.getHeaderHandle() ),
            monthProps = assign({},commonProps, this.getCalendarHandle() ) ,
            weekProps = assign({},commonProps, this.getCalendarHandle() ),
            bottomProps = assign({},commonProps, this.getBottomHandle() );

        if(this.domHeight){
            var headerHeight = this.domHeight['header'],
                monthHeight = this.domHeight['month'],
                weekHeight = this.domHeight['week'],
                slideTop = this.state.slideTop;
            monthProps['scale'] =  1 - Math.abs(this.state.slideTop)/ (monthHeight * 3) ;
            weekProps['translateY'] = 0  + (slideTop/(monthHeight - weekHeight) - 1) * ( headerHeight + weekHeight);
        }

        return (
            <div className='muiCalendarContainer'>
                <CalendarHeader {...headerProps} ref = 'muiCalendarHeader'></CalendarHeader>
                <CalendarWeek {...weekProps} ref = 'muiCalendarWeek'></CalendarWeek>
                <CalendarMonth {...monthProps} ref = 'muiCalendarMonth'></CalendarMonth>
                <CalendarBottom {...bottomProps}>
                    {this.props.children}
                </CalendarBottom>
            </div>
        );
    },

    componentDidMount : function(){
        var header = ReactDOM.findDOMNode(this.refs['muiCalendarHeader']),
            month = ReactDOM.findDOMNode(this.refs['muiCalendarMonth']),
            week = ReactDOM.findDOMNode(this.refs['muiCalendarWeek']);
        this.domHeight = {
            'header' :  header.getBoundingClientRect()['height'],
            'month' : month.getBoundingClientRect()['height'],
            'week' : week.getBoundingClientRect()['height']
        };
    },

    //日历头部事件
    getHeaderHandle : function(){
        var self = this;
        function handlePaging(dir){
            var _date = new Date();
            if(dir !== 'today'){ //切换到今天
                var _date = self.state.date;
                if(self.state.mode === 'month'){ //日历模式为月
                    if(dir === 'pre'){ //上个月
                        _date = moment(_date).subtract(1,'months').toDate();
                    }else{ //下个月
                        _date = moment(_date).add(1,'months').toDate();
                    }
                }else{
                    if(dir === 'pre'){ //上周
                        _date = moment(_date).subtract(1,'weeks').toDate();
                    }else{ //下周
                        _date = moment(_date).add(1,'weeks').toDate();
                    }
                }
            }
            self.setState({
                date : _date
            });
        }
        return {
            //切换到上一页
            preHandler : function(){
                handlePaging('pre');
            },
            //切换到下一页
            nextHandler : function(){
                handlePaging('next');
            },
            //切换到今天
            todayHanlder : function(){
                handlePaging('today');
            }
        };
    },

    getCalendarHandle : function(){
        var self = this;
        return {
            tapHandle : function(date){
                self.setState({
                    date : date
                });
            }
        };
    },

    getBottomHandle : function(){
        var self = this;
        return {
            touchStartHandle : function(evt){
                evt.preventDefault();
                if(!self.props.canSwitch && self.touching === true)
                    return;
                self.touching = true;
                var touch = evt.touches[0];
                self.startPosition = {
                    x: touch.pageX,
                    y: touch.pageY
                };
            },
            touchMoveHandle : function(evt){
                if(!self.props.canSwitch && self.touching !== true)
                    return;
                var touch = evt.touches[0],
                    slideTop = self.state.slideTop;
                self.currentPosition = {
                    x: touch.pageX,
                    y: touch.pageY
                };
                var dy = self.startPosition.y - self.currentPosition.y;
                if(self.state.mode === 'month' && dy > 0){
                    slideTop = dy;
                }
                if(self.state.mode == 'week' && dy < 0){
                    var monthHeight = self.domHeight['month'],
                        weekHeight = self.domHeight['week'];
                    slideTop = monthHeight - weekHeight + dy;
                }
                self.setState({
                    slideTop : slideTop
                });
            },
            touchEndHandle : function(){
                if(!self.props.canSwitch)
                    return;
                var monthHeight = self.domHeight['month'],
                    weekHeight = self.domHeight['week'],
                    mode = self.state.mode,
                    slideTop = (mode == 'month' ? 0 : monthHeight - weekHeight) ;
                if( monthHeight / 3  < Math.abs(self.startPosition.y - self.currentPosition.y)){
                    if(mode == 'month'){
                        slideTop = monthHeight - weekHeight;
                        mode = 'week';
                    }else{
                        slideTop = 0;
                        mode = 'month';
                    }
                }
                self.setState({
                    slideTop : slideTop,
                    mode : mode
                });
                self.touching = false;
            }
        };
    }


});

module.exports = Calendar;
