'use strict';

const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header =document.body.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTebContent() {
        content.forEach(item => {
            item.style.display= 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display= display;
        tab[i].classList.add(activeClass);
    }

    hideTebContent();
    showTabContent();

    header.addEventListener('click', e => {
        const target = e.target;
        
        if(target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')) )) {
            tab.forEach((item, i) => {
                console.log(item);
                if(target == item || target.parentNode == item) {
                    hideTebContent();
                    showTabContent(i);
                }
            });
        }

        
    });
};


export default tabs;