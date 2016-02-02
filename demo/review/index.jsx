var React = require('react'),
    Container = MUIReact.Container,
    TabBar = MUIReact.TabBar,
    TabBarButton = MUIReact.TabBarButton,
    TabBarButtonGroup = MUIReact.TabBarButtonGroup,
    BackButton = MUIReact.BackButton,
    NavSwapList = MUIReact.NavSwapList,
    CardItem = MUIReact.CardItem;

var ReviewIndex = React.createClass({

    render : function(){
    	var defaultDatas = this.data();
        return (
        	<Container>
               	<NavSwapList defaultDatas = {defaultDatas} item = {CardItem}></NavSwapList>
                <TabBar>
                    <BackButton align='left' iconClass='mui-back'></BackButton>
                    <TabBarButton iconClass='mui-create' ></TabBarButton>
                    <TabBarButtonGroup align='right' iconClass='mui-more'>
                        <TabBarButton iconClass='mui-home' text = '主页'></TabBarButton>
                    </TabBarButtonGroup>
                </TabBar>
            </Container>
        );
    },

    //静态数据
    data : function(){
        return [{
            text: '所有流程',
            list : [
            	{id:'review',text : '流程管理', to:'review'},
            	{id:'calendar',text : '我的日程', to:'calendar'},
            	{id:'notify',text : '待办事宜', to:'notify'},
            	{id:'forum',text : '论坛', to:'forum'},
                {id:'doc',text : '文档', to:'forum'}
            ]
        },{
        	text : '待审流程',
        	list : [
        		{id:'review',text : '流程管理', to:'review'},
            	{id:'calendar',text : '我的日程', to:'calendar'},
            	{id:'notify',text : '待办事宜', to:'notify'}
        	]
        }];
    }

});


module.exports = ReviewIndex;
