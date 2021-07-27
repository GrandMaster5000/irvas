'use strict';
import checkNumInputs from "./checkNumInputs";
import clearInputs from "./clearInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form');
         

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const  postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

   

    form.forEach(item => {
        item.addEventListener('submit', e =>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    document.body.children.forEach(item => {
                        if (item.getAttribute('data-modal') != null) {
                            item.style.display = 'none';
                        }
                    });
                    document.body.style.overflow = '';
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();   
                    }, 5000);
                });
        });
    });
};

export default forms;