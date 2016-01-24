var React = require('react'),
    Button = MUIReact.Button;

var ReviewIndex = React.createClass({

    render : function(){
        var style = {
            marginTop : '1rem'
        };
        return (
            <div style={style}>
                <Button title = '默认样式'></Button>
                <Button title = '主色样式' buttonClass = 'mui-btn-primary'></Button>
                <Button title = '绿色样式' buttonClass = 'mui-btn-success'></Button>
                <Button title = '橙色样式' buttonClass = 'mui-btn-warning'></Button>
                <Button title = '红色样式' buttonClass = 'mui-btn-danger'></Button>
            </div>
        );
    }

});


module.exports = ReviewIndex;
