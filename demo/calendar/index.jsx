var React = require('react'),
    Container = MUIReact.Container,
    TabBar = MUIReact.TabBar,
    TabBarButton = MUIReact.TabBarButton,
    TabBarButtonGroup = MUIReact.TabBarButtonGroup,
    Calendar = MUIReact.Calendar,
    adapter = MUIReact.utils.adapter;

var CalendarIndex = React.createClass({
    render : function(){
        var style={
            height : 300
        };
        return (
            <Container>
                <Calendar></Calendar>
                <TabBar>
                    <TabBarButton align='left' iconClass='mui-back' onClick={this.handleBack}></TabBarButton>
                    <TabBarButton iconClass='mui-create' ></TabBarButton>
                    <TabBarButtonGroup align='right' iconClass='mui-more'>
                        <TabBarButton iconClass='mui-home' text = '主页'></TabBarButton>
                    </TabBarButtonGroup>
                </TabBar>
            </Container>
        );
    },

    handleBack : function(){
        adapter.goBack();
    }


});


module.exports = CalendarIndex;
