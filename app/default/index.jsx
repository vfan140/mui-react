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
        var datas = this.__data();
        return (
            <Container>
                <Header>
                    <div className = 'defaultHeader'>Demo-MUIReact</div>
                </Header>
                <List datas = {datas} component = 'div' itemComponent = {Link} item = {CardItem}></List>
            </Container>
        );
    },

    //静态数据
    __data : function(){
        return [
            {id:'review',text : '流程管理', to:'review'},
            {id:'calendar',text : '我的日程', to:'calendar'},
            {id:'todo',text : '待办事宜', to:'todo'},
            {id:'forum',text : '论坛', to:'forum'}
        ];
    }
});



module.exports = Default;
