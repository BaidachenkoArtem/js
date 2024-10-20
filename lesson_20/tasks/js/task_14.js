"use strict"

/*
	Розробити форму для введення логіна і пароля. Кнопка буде активною тільки тоді, коли буде задано логін і пароль.
*/

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

function toggleButtonState() {
    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    submitButton.disabled = !(loginValue && passwordValue);
}

loginInput.addEventListener('input', toggleButtonState);
passwordInput.addEventListener('input', toggleButtonState);