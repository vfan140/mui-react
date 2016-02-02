var React = require('react'),
    Container = MUIReact.Container,
    TabBar = MUIReact.TabBar,
    TabBarButton = MUIReact.TabBarButton,
    TabBarButtonGroup = MUIReact.TabBarButtonGroup,
    BackButton = MUIReact.BackButton,
    Calendar = MUIReact.Calendar;

var CalendarIndex = React.createClass({
    render : function(){
        return (
            <Container>
                <Calendar></Calendar>
                <TabBar>
                    <BackButton align='left' iconClass='mui-back'></BackButton>
                    <TabBarButton iconClass='mui-create' ></TabBarButton>
                    <TabBarButtonGroup align='right' iconClass='mui-more'>
                        <TabBarButton iconClass='mui-home' text = '主页'></TabBarButton>
                    </TabBarButtonGroup>
                </TabBar>
            </Container>
        );
    }


});


module.exports = CalendarIndex;
