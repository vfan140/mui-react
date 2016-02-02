require('css/nav.scss');

var React = require('react'),
    request = require('superagent'),
    classset = require('react-classset');

var NavBar = React.createClass({

    getDefaultProps : function(){
        return {
            defaultdatas : [],
            defaultItemIndex : 0
        };
    },

    getInitialState : function(){
        return {
            datas : this.props.defaultdatas,
            itemIndex : this.props.defaultItemIndex
        };
    },

    componentWillReceiveProps : function(nextProps){
        if(nextProps != null 
            && (nextProps.defaultItemIndex != this.props.defaultItemIndex) ){
            this.setState({
                itemIndex : nextProps.defaultItemIndex
            });
        }
    },

    render : function(){
        var self = this;
        return (
            <div className = 'muiNavbar'>
                <ul className = 'muiNavbarContainer'>
                    {
                        this.state.datas.map(function(data,index){
                            return self.renderItem(data,index);
                        })
                    }
                </ul>
            </div>
        );
    },

    componentDidMount : function(){
        var datas = this.state.datas.slice(0),
            self = this;
        if(this.props.url){
            request.post(this.props.url)
                .end(function(){

                });
        }
    },

    renderItem : function(data,index){
        var key = 'navItem' + index,
            className = classset({
                muiNavitem : true,
                muiNavitemSelected : this.state.itemIndex == index
            });
        return (
            <li className = {className} key = {key} onClick = {this.handleItemOnClick.bind(this,index)}>
                <span className = 'textEllipsis muiNavitemSpan'>{data.text}</span>
            </li>
        );
    },

    handleItemOnClick : function(index){
        if(this.props.handleNavBar){
            this.props.handleNavBar(index);
            return ;
        }
        this.setState({
            itemIndex : index
        });
    }

});

module.exports = NavBar;
