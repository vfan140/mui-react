require('css/panel.scss');

var React = require('react');

var SlidePanel = React.createClass({

    getInitialState : function(){
        return {
            hasSlide : false ,
            index : 0
        };
    },

    render : function(){
        var store = this.props.store,
            slidePanelClassName = 'muiSlidePanel',
            self = this;
        if(this.state.hasSlide){
            slidePanelClassName += ' left';
        }
        return (
            <div className={slidePanelClassName}>
            {
                store.map(function(item,index){
                    var muiSlidePanelCatalogClassName = 'muiSlidePanelCatalog',
                        LinkComponent = item.linkComponent;
                    if(self.state.index == index){
                        muiSlidePanelCatalogClassName += ' selected';
                    }
                    return (
                        LinkComponent ?
                        <LinkComponent to = {item.linkTo}>
                            <div key={index} className={muiSlidePanelCatalogClassName} onClick={item.onClick}>
                                <span className='mui mui-meeting_path'></span>
                                <div>{item.title}</div>
                            </div>
                        </LinkComponent>
                        :
                        <div key={index} className={muiSlidePanelCatalogClassName} onClick={item.onClick}>
                            <span className='mui mui-meeting_path'></span>
                            <div>{item.title}</div>
                        </div>
                    );
                })
            }
            </div>
        );
    }

});

module.exports = SlidePanel;
