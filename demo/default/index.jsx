require('./default.scss');

var moduleImg = require('./module.png');

var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var modules = [
    {id:'review',name : '流程管理'},
    {id:'calendar',name : '我的日程'},
    {id:'notify',name : '待办事宜'},
    {id:'forum',name : '论坛'}
];

var Default = React.createClass({
    render : function(){
        var links = modules.map(function(_module){
            return (
                <li key={_module.id}>
                    <Link to={_module.id}>
                        <span className = 'iconBox'>
                            <img src={moduleImg}></img>
                        </span>
                        <span className = 'txt'>
                            {_module.name}
                        </span>
                    </Link>
                </li>
            );
        });
        return (
            <article className = 'navgationWrap'>
                <h4>MUI模块</h4>
                <div className = 'navgationList'>
                    <ul>
                        {links}
                    </ul>
                </div>
            </article>
        );
    }
});



module.exports = Default;
