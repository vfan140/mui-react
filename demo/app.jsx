//mock
require('./mock/superagent-mock.js');

var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Container = MUIReact.Container,
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    browserHistory = ReactRouter.browserHistory;

var App = React.createClass({
    render : function(){
        return (
            <Container transition='sfl'>
                {this.props.children}
            </Container>
        );
    }
});

var modules = require('./modules.js');

var ModuleHandler = React.createClass({
    render : function(){
        var _module = this.props.params.module,
            _Module = modules[_module];
        return (
            <_Module></_Module>
        );
    }
});

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path=":module" component={ModuleHandler} />
            <IndexRoute component={modules.default} />
        </Route>
    </Router>
);

// 将匹配的路由渲染到 DOM 中
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});
