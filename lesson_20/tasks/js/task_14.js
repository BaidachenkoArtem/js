"use strict"

/*
	Розробити форму для введення логіна і пароля. Кнопка буде активною тільки тоді, коли буде задано логін і пароль.
*/

//=============== Не мій варіант1 ===============

//=============== Не мій варіант2 ===============

//=============== Не мій варіант3 ===============

//=============== Не мій варіант4 ===============

//=============== Мій варіант1 ==================
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

function toggleButtonState() {
    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    submitButton.disabled = !(loginValue && passwordValue);
}

// Додаємо обробник подій для обох полів
loginInput.addEventListener('input', toggleButtonState);
passwordInput.addEventListener('input', toggleButtonState);

//=============== Мій варіант2 ==================