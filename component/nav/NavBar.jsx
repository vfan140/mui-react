require('css/nav.scss');

var React = require('react'),
    request = require('superagent');

var NavBar = React.createClass({

    getInitialState : function(){
        return {
            datas : this.props.datas || []
        };
    },

    render : function(){
        return (
            <div className = 'muiNavbar'>
                <div className = 'muiNavbarSelected'></div>
                <ul className = 'muiNavbarContainer'>
                    {
                        this.state.datas.map(function(data){
                            return (
                                <li className = 'muiNavitem'>
                                    <span className = 'textEllipsis muiNavitemSpan'>{data.text}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    },

    componentDidMount : function(){
        var datas = this.props.datas.slice(0),
            self = this;
        if(this.props.url){
            request.post(this.props.url)
                .end(function(){

                });
        }
    }

});
