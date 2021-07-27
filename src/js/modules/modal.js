'use strict';


function workModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.body.querySelectorAll(triggerSelector),
          modal = document.body.querySelector(modalSelector),
          closeBtn = document.body.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]');

        closeModal(closeBtn, modal, windows, closeClickOverlay);
        openModal(trigger, modal, windows);

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

function openModal(trigger, modal, windows) {
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

        if(getComputedStyle(modal).display == 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown' , e => {
        if(e.key == 'Escape') {
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