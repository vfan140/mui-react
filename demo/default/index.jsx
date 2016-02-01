require('./default.scss');

var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    List = MUIReact.List,
    Container = MUIReact.Container,
    Header = MUIReact.Header,
    CardItem = MUIReact.CardItem;

var Default = React.createClass({
    
    render : function(){
        var datas = [
            {id:'review',subject : '流程管理', to:'review'},
            {id:'calendar',subject : '我的日程', to:'calendar'},
            {id:'notify',subject : '待办事宜', to:'notify'},
            {id:'forum',subject : '论坛', to:'forum'}
        ];
        return (
            <Container>
                <Header>
                    <div className = 'defaultHeader'>APP-MUIReact</div>
                </Header>
                <List datas = {datas} component = 'div' itemComponent = {Link} item = {CardItem}></List>
            </Container>
        );
    }
});



module.exports = Default;
