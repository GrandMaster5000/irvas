'use strict';


function workModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.body.querySelectorAll(triggerSelector),
          modal = document.body.querySelector(modalSelector),
          closeBtn = document.body.querySelector(closeSelector);

        closeModal(closeBtn, modal);
        openModal(trigger, modal);

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

function openModal(trigger, modal) {
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target) {
                e.preventDefault();
            }
            if(getComputedStyle(modal).display == 'none') {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } 
        });
    });
}

function closeModal(closeBtn, modal) {
    closeBtn.lastChild.addEventListener('click', (e) => {
        if(e.target) {
            e.preventDefault();
        }
        if(getComputedStyle(modal).display == 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown' , e => {
        if(e.key == 'Escape') {
            if(getComputedStyle(modal).display == 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

export default workModal;