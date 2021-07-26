'use strict';
import './slider';
import workModal from './modules/modal';
import tabs from './modules/tabs';


document.addEventListener("DOMContentLoaded", () => {

    workModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    workModal('.phone_link', '.popup', '.popup .popup_close');
    tabs('.glazing_slider' ,'.glazing_block', '.glazing_content' , 'active');
    tabs('.decoration_slider   ' ,'.no_click', '.decoration_content > div > div' , 'after_click');

});