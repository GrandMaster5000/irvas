'use strict';

const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

        
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    bigImg.style.width = '350px';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', e => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            document.body.style.overflow = 'hidden';
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')) {
            document.body.style.overflow = '';
            imgPopup.style.display = 'none';
        }
    });

};

export default images;