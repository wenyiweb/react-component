import React from 'react';
import ReactDOM from 'react-dom';

import resetCss from './css/reset.less';
import demoCss from './css/demo.less';
import carousel_css from './css/carousel.less';
import popup_css from './css/popup.less';
import dropdown_css from './css/dropdown.less';
import menu_css from "./css/menu.less";
import modal_css from './css/modal.less';
import pin_css from './css/pin.less';
import tab_css from './css/tab.less';
import slidemenu_css from './css/slide-menu.less';
import pagination_css from './css/pagination.less';
import timepicker_css from './css/time-picker.less';
import datepicker_css from './css/date-picker.less';

import CheckBoxDemo from "./demo/CheckBoxDemo.jsx";
import RadioDemo from "./demo/RadioDemo.jsx";
import RadioGroupDemo from "./demo/RadioGroupDemo.jsx";
import CheckBoxGroupDemo from "./demo/CheckBoxGroupDemo.jsx";
import DropDownDemo from "./demo/DropDownDemo.jsx";
import MenuDemo from "./demo/MenuDemo.jsx";
import ConfirmBoxDemo from "./demo/ConfirmBoxDemo.jsx";
import TooltipDemo from "./demo/TooltipDemo.jsx";
import ModalDemo from "./demo/ModalDemo.jsx";
import TabDemo from "./demo/TabDemo.jsx";
import PinDemo from "./demo/PinDemo.jsx";
import CarouselDemo from "./demo/CarouselDemo.jsx";
import PaginationDemo from "./demo/PaginationDemo.jsx";
import SlideMenuDemo from "./demo/SlideMenuDemo.jsx";
import TimeInputDemo from "./demo/TimeInputDemo.jsx";
import DatePickerDemo from "./demo/DatePickerDemo.jsx";
import CalenderDemo from "./demo/CalenderDemo.jsx";

class Demo extends React.Component {
    render() {
        return ( 
            <div>
                <div className="header">
                    <div className="container">
                        <h2>React Component</h2>
                        <blockquote>Some basic component,<b>barely no css</b>, <b>build with ReactJs</b></blockquote> 
                        <ul>
                            <li>Blog: <a target="_blank" href="http://braavos.me">落在深海</a></li>
                            <li>Github: <a target="_blank" href="http://github.com/jerryshew/react-component">react-component</a></li>
                            <li>Organization: <a target="_blank" href="http://wecatch.me">wecatch</a></li>
                        </ul>
                    </div>
                </div>
                <div className="wrapper" id="demo_list">
                    <ol className="container">
                        <li>
                            <h3>checkbox</h3>
                            <CheckBoxDemo/>
                        </li>
                        <li>
                            <h3>radio</h3>
                            <RadioDemo/>
                        </li>
                        <li>
                            <h3>radio group</h3>
                            <RadioGroupDemo/>
                        </li>
                        <li>
                            <h3>checkbox group</h3>
                            <CheckBoxGroupDemo/>
                        </li>
                        <li>
                            <h3>drop down</h3>
                            <DropDownDemo/>
                        </li>
                        <li>
                            <h3>menu</h3>
                            <MenuDemo/>
                        </li>
                        <li>
                            <h3>confirm box</h3>
                            <ConfirmBoxDemo/>
                        </li>
                        <li>
                            <h3>tooltip</h3>
                            <TooltipDemo/>
                        </li>
                        <li>
                            <h3>modal</h3>
                            <ModalDemo/>
                        </li>
                        <li>
                            <h3>tab</h3>
                            <TabDemo/>
                        </li>
                        <li>
                            <h3>pin, something fixed position</h3>
                            <PinDemo/>
                        </li>
                        <li>
                            <h3>carousel</h3>
                            <CarouselDemo/>
                        </li>
                        <li>
                            <h3>pagination</h3>
                            <PaginationDemo/>
                        </li>
                        <li>
                            <h3>slide bar</h3>
                            <SlideMenuDemo/>
                        </li>
                        <li>
                            <h3>date picker</h3>
                            <DatePickerDemo/>
                        </li>
                        <li>
                            <h3>time input</h3>
                            <TimeInputDemo/>
                        </li>
                        <li>
                            <h3>calender</h3>
                            <CalenderDemo/>
                        </li>
                    </ol>
                </div>
                <div className="footer container">
                    <a href="http://braavos.me" target="_blank">@落在深海</a>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Demo/> , document.getElementById('root'));
