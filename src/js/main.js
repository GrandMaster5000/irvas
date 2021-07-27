'use strict';
import './slider';
import workModal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';


document.addEventListener("DOMContentLoaded", () => {

    workModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    workModal('.phone_link', '.popup', '.popup .popup_close');
    workModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close', false);
    workModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    workModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    tabs('.glazing_slider' ,'.glazing_block', '.glazing_content' , 'active');
    tabs('.decoration_slider   ' ,'.no_click', '.decoration_content > div > div' , 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img' , 'do_image_more', 'inline-block');
    forms();

});