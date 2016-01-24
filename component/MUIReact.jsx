require('css/base.scss');

module.exports = {

    version : '1.0',

    //dialog:
    DialogJS : require('./dialog/DialogJS.jsx'),
    Confirm : require('./dialog/Confirm.jsx'),
    Tip : require('./dialog/Tip.jsx'),
    BarTip : require('./dialog/BarTip.jsx'),

    //form:
    Input : require('./form/Input.jsx'),
    Textarea : require('./form/Textarea.jsx'),
    Radio : require('./form/Radio.jsx'),
    RadioGroup : require('./form/RadioGroup.jsx'),
    CheckBox : require('./form/CheckBox.jsx'),
    CheckBoxGroup : require('./form/CheckBoxGroup.jsx'),

    //header:
    Header : require('./header/Header.jsx'),

    //nav:
    NavBar : require('./nav/NavBar.jsx'),

    //panel:
    AccordionPanel : require('./panel/AccordionPanel.jsx'),
    SlidePanel : require('./panel/SlidePanel.jsx'),
    Content : require('./panel/Content.jsx'),

    //tabbar:
    TabBar : require('./tabbar/TabBar.jsx'),
    TabBarButton : require('./tabbar/TabBarButton.jsx'),
    TabBarButtonGroup : require('./tabbar/TabBarButtonGroup.jsx'),


    //button:
    Button : require('./button/Button.jsx'),

    //calendar :
    Calendar : require('./calendar/Calendar.jsx'),

    //utils
    utils : {
        adapter : require('./device/adapter.js')
    }

};
