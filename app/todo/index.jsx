var React = require('react'),
    Container = MUIReact.Container,
    TabBar = MUIReact.TabBar,
    TabBarButton = MUIReact.TabBarButton,
    TabBarButtonGroup = MUIReact.TabBarButtonGroup,
    BackButton = MUIReact.BackButton,
    Button = MUIReact.Button,
    PicSlideTrigger = MUIReact.PicSlideTrigger;

var TodoIndex = React.createClass({

    render : function(){
        var datas = this.data();
        return (
        	<Container>
                <Container>
                    <PicSlideTrigger datas = {datas}>
                        <Button title = '测试轮播组件'></Button>
                    </PicSlideTrigger>
                </Container>
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

    data : function(){
        return [{
            title : '归墟',
            img : 'http://cyldurl.changyou.com/uploadfile/2014/1231/20141231085241927.jpg'
        },{
            title : '景安',
            img : 'http://cyldurl.changyou.com/uploadfile/2015/0122/20150122083855718.jpg'
        },{
            title : '天晴之海',
            img : 'http://cyldurl.changyou.com/uploadfile/2014/1231/20141231085318400.jpg'
        }];
    }

});


module.exports = TodoIndex;
