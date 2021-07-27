'use strict';
import clearInputs from "./clearInputs";
import calcScroll from "./calcScroll";

function workModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.body.querySelectorAll(triggerSelector),
          modal = document.body.querySelector(modalSelector),
          closeBtn = document.body.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scrollWindow = calcScroll();

        closeModal(closeBtn, modal, windows, closeClickOverlay);
        openModal(trigger, modal, windows, scrollWindow);

    if(modalSelector == '.popup') {
        showModalByTime(modal, 30000);
    }
           
}

function showModalByTime(modal, time) {
    setTimeout(() => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, time);
}

function openModal(trigger, modal, windows, scrollWindow) {
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }

            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.overflow = '';
            });

            if(getComputedStyle(modal).display == 'none') {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scrollWindow}px`;
            } 
        });
    });
}

function closeModal(closeBtn, modal, windows, closeClickOverlay) {
    closeBtn.lastChild.addEventListener('click', (e) => {
        if(e.target) {
            e.preventDefault();
        }

        windows.forEach(item => {
            item.style.display = 'none';
            document.body.style.overflow = '';
        });
        
        document.body.style.marginRight = `0px`;
        clearInputs();
        if(getComputedStyle(modal).display == 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown' , e => {
        if(e.key == 'Escape') {
            clearInputs();
            document.body.style.marginRight = `0px`;
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.overflow = '';
            });
            if(getComputedStyle(modal).display == 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal && closeClickOverlay) {
            clearInputs();
            document.body.style.marginRight = `0px`;
            windows.forEach(item => {
                item.style.display = 'none';
                document.body.style.overflow = '';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}




export default workModal;