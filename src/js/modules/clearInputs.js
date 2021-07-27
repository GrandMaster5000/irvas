'use strict';
const clearInputs = () => {
    const inputs = document.body.querySelectorAll('input');

    inputs.forEach(item => {
        item.value = '';
    });
};

export default clearInputs;