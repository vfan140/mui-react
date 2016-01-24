require('css/tabbar.scss');

var React = require('react'),
    ReactDOM = require('react-dom'),
    ToolTip = require('./ToolTip.jsx');

var TabBarButtonGroup = React.createClass({

    getDefaultProps : function(){
        return {
            buttonType : 'group',
            node : 'span',
            iconClass : 'mui-more',
            align : 'right',
            dir : 'top right'
        };
    },

    render : function(){
        var Node = this.props.node,
            iconClass = ['mui',this.props.iconClass].join(' '),
            btnStyle = {
                width : this.props.width
            },
            innerStyle = {
                float : this.props.align == 'center' ? '' : this.props.align
            };
        return (
            <Node className = 'muiTabBarButton muiTabBarButtonGroup' title = {this.props.title} style={btnStyle} onClick={this.handleOnClick}>
                <div className = 'muiTabBarButtonIconArea' style={innerStyle}>
                    <i className = {iconClass}></i>
                </div>
                <div className = 'muiTabBarButtonLabel' style={innerStyle}>
                    {this.props.text}
                </div>
            </Node>
        );
    },

    handleOnClick : function(evt){
        if(!this.toolTipInstance){
            var target = evt.currentTarget;
            var style = {};
            ['top','left','bottom','right'].forEach(function(position){
                if(this.props.dir.indexOf(position) > -1){
                    switch (position) {
                        case 'top':
                            style['bottom'] = window.innerHeight - target.offsetTop + target.offsetHeight/2
                            break;
                        case 'bottom':
                            style['top'] = target.offsetTop + 3 * target.offsetHeight / 2;
                            break;
                        case 'left':
                            style['left'] = target.offsetLeft
                            break;
                        case 'right' :
                            style['right'] = window.innerWidth - target.offsetLeft - target.offsetWidth
                            break;
                    }
                }
            },this);
            //传递children,非确定规范做法...
            var toolTip = <ToolTip children={this.props.children} {...style}></ToolTip>,
                wrapper = document.createElement('div');
            wrapper.className = 'muiTooltipWrapper';
            document.body.appendChild(wrapper);
            this.toolTipInstance = ReactDOM.render(toolTip,wrapper);
        }
        this.toolTipInstance.setState({
            show : !this.toolTipInstance.state.show
        });
    }

});

module.exports = TabBarButtonGroup;
